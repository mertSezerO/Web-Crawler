const {JSDOM} = require('jsdom')

async function crawlPage(currentURL){
    console.log("Right now crawling: " + currentURL)
    try {
        const resp = await fetch(currentURL)
        if(resp.status !== 200){
            console.log(`ERROR while fetching with status code: ${resp.status}, on page: ${currentURL}`)
            return
        }

        const contentType = resp.headers.get("content-type")
        if(!contentType.includes("text/html")){
            console.log(`ERROR non html response: ${contentType}, on page: ${currentURL}`)
            return
        }

        console.log(await resp.text())
    } catch (err) {
        console.log(`ERROR while fetching: ${err.message}, on page: ${currentURL}`)
    }
}

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
    normalizeURLfromHTML,
    crawlPage
}