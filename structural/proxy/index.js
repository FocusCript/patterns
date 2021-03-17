function fetchData(url){
    return `${url} - from server`
}

const cache = new Set()

const ProxiedReq = new Proxy(fetchData, {
    apply(target, thisArg, args){
        const url = args[0]
        if(cache.has(url)){
            return `${url} - from cache`
        }else{
            cache.add(url)
            return Reflect.apply(target, thisArg, args)
        }
    }
})

console.log(ProxiedReq('react.io'))
console.log(ProxiedReq('github.io'))
console.log(ProxiedReq('github.io'))
console.log(ProxiedReq('react.io'))
