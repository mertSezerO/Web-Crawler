const { crawlPage } = require('./crawl.js') 

function main(){
    if(process.argv.length <3 || process.argv.length >3){
        console.log("Usage: node start <input file>");
        process.exit(1)
    }
    const baseURL = process.argv[2]
    console.log("Starting crawl of " + baseURL)
    crawlPage(baseURL)
}

main()