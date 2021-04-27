/***
 * 获取路由
 *
 */
let r = routerMap[platform].routes
console.log(r)
r = filterFun(r)
console.log(JSON.stringify(r))
function filterFun (it) {
    if(Array.isArray(it)) {
        it = it.map(it=>{
            return filterFun(it)
        })
        return it
    }else{
        let item = {}
        item.name = it.name
        item.path = it.path
        if(it.children) {
            item.children = it.children.map(child =>{
                return   filterFun(child)
            })
        }
        return item
    }

}
