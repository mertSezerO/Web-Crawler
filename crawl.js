function normalizeURL(inputURL){
    const url = new URL(inputURL)
    const hostPath = '' +url.hostname + url.pathname
   if (hostPath.length >0 && hostPath.slice(-1) === '/'){
        return hostPath.slice(0,-1)
   }
   return hostPath
}

module.exports = {
    normalizeURL
}