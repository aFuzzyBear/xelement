    
const fetchData = async(path)=>{
  return await import(path).then(exports=>exports.frontmatter)
}
/** Attaches a nested menu to an array of static paths. */
const withNestedMenu = async (paths) => {
    const hash = Object.create(null)

    const root = { name: 'root' }

    for (const path of paths) {
        const segments = path.props.slug.split('/')
        const filtered = segments.filter(x=> x!=='').filter(x=> !(x.includes('readme')))
        let item = root
        for (const [index, name] of Object.entries(filtered)) {
        if(!item.items){
            item.items = []
        }
        let isItem = index === String(filtered.length - 1)
        if (isItem) {
            item.items.push({ name, href: `/docs/${path.props.directory}/${path.props.slug.toLowerCase()}` })
        } else {
            item.items = item.items || []

            item = (
            hash[name] = (
                hash[name] ||
                item.items[item.items.push({ name, items: [] }) - 1]
            )
            )
        }
        }
    }

  for (const path of paths) {
    // postFileIndexToToml({
    //   path:path.props.path,
    //   url:`${path.props.slug}`,
    //   title:path.props.slug.split('/').join(' ')
    // })
    path.props.menu = root.items
    path.props.data = await fetchData(path.props.path)
  }
  return paths
}

export default withNestedMenu