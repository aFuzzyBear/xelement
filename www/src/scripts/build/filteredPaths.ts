
const paths = Object.keys(import.meta.glob('../../../../docs/**/*.md'))
    
export function globby(){
    const docdir = '../../../../docs/'
    return paths.map(
        (slug) => {
         return ({
           params: {
               slug: slug.slice(docdir.length,-3).split('/').slice(1).join('/').toLowerCase(),
           },
           props: {
               slug: slug.slice(docdir.length,-3).split('/').slice(1).join('/').toLowerCase(),
               directory: slug.slice(docdir.length,-3).split('/').slice(0,1).join('/').toLowerCase(),
               path: new URL(slug, import.meta.url).pathname,
           },
       })}
   ).filter(
          x=>!(x.props.directory.includes('readme'))
           )
}

export default function filteredPaths(filterby){
    return (filterby ==='all') ? globby() : globby().filter(x=>x.props.directory.includes(filterby))
}