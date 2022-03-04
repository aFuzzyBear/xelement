    
const fetchData = async(path)=>{
    return await import(path).then(exports=>exports.frontmatter)
  }
  /** Attaches frontmatter and data from each file alongside nested menu of static paths. */
  const withMetaData = async (paths) => {
      const hash = Object.create(null)
      const root = { name: 'root' }
      for (const path of paths) {
          const data = await fetchData(path.props.path)
          const metaData = Object.entries(data)
              .filter(result=>!result.includes('astro'))
              .reduce((prev,current)=>({...prev,[current[0]]:current[1]}),{})
          path.props.data = data
          const segments = path.props.slug.split('/')
          const filtered = segments.filter(x=> x!=='').filter(x=> !(x.includes('readme')))
          let item = root
          for (const [index, name] of Object.entries(filtered)) {
            if(!item.items){
                item.items = []
            }
            let isItem = index === String(filtered.length - 1)
            if (isItem) {
                item.items.push({ 
                    name, 
                    href: `/docs/${path.props.directory}/${path.props.slug.toLowerCase()}`,
                    meta:{...metaData}
                    })
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
    
          path.props.menu = root.items
      }
    return paths
  }
  
  export default withMetaData