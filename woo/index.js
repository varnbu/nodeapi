const {listIntoMap} = require('./utils')

let agentRouters = require('./agentPCRouters')
let agentXCardRouter = require('./agentXCardRouter')


console.log(agentRouters[0].children.length)
console.log(agentXCardRouter[0].children.length)
let map = new Map()
listIntoMap(agentRouters, map)
let a = []
traverList(agentXCardRouter,'children',map,a)
console.log('重复的路由个数',a.length)
console.log(a)
function traverList (list, childKey, map,arr) {
    list.forEach(it=>{
        let mapIt = map.get(it.name)
        if(mapIt&&mapIt.name===it.name){
            arr.push({
                x:it,
                m:mapIt
            })
            a
        }
        if(it[childKey]&&it[childKey].length){
            traverList(it.children,childKey,map,arr)
        }
    })
}
