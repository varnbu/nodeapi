function listIntoMap (list, map) {
    if (list && list.length > 0) {
        list.forEach(it => {
            map.set(it.name, {
                path:it.path,
                name:it.name
            })
            if (it.children) {
                listIntoMap(it.children, map)
            }
        })
    }
}

module.exports={
    listIntoMap
}
