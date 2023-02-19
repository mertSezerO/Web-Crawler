const { crawlPage } = require('./crawl.js') 
const { printReport } = require('./report.js') 

async function main(){
    if(process.argv.length <3 || process.argv.length >3){
        console.log("Usage: node start <input file>");
        process.exit(1)
    }
    const baseURL = process.argv[2]
    console.log("Starting crawl of " + baseURL)
    const pages = await crawlPage(baseURL,baseURL,{})
    await printReport(pages)
}

main()