function printReport(pages){
    console.log("-------------")
    console.log('REPORT')
    console.log("-------------")
    const report = crawlingReport(pages)
    for(const page of report){
        const url = page[0]
        const total = page[1]
        console.log(`Found ${total} links to page: ${url}`)
    }

    console.log("-------------")
    console.log('END REPORT')
    console.log("-------------")
}

function crawlingReport(pages){
    const list = Object.entries(pages)
    list.sort((a,b) => {
        aTotal = a[1]
        bTotal = b[1]
        return bTotal - aTotal
    })
    return list
}

module.exports = {
    crawlingReport,
    printReport
}