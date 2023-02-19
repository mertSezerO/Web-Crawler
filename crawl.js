const {JSDOM} = require('jsdom')

function normalizeURL(inputURL){
    const url = new URL(inputURL)
    const hostPath = '' +url.hostname + url.pathname
   if (hostPath.length >0 && hostPath.slice(-1) === '/'){
        return hostPath.slice(0,-1)
   }
   return hostPath
}

function normalizeURLfromHTML(html, baseURL){
    const urls = []
    const dom = new JSDOM(html)
    const links = dom.window.document.querySelectorAll('a')
    for (const link of links){
        try{
            if(link.href.slice(0,1) === '/'){
                const url = new URL(baseURL + link.href)
                urls.push(url.href)
            }
            else{
                const url = new URL(link.href)
                urls.push(url.href)
            } 
        }
        catch(err){
            console.log("Error with url: " + err.message)
        }
    }
    return urls
}

module.exports = {
    normalizeURL,
    normalizeURLfromHTML
}