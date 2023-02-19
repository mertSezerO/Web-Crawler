const { normalizeURL,normalizeURLfromHTML } = require('./crawl.js')
const { test, expect } = require('@jest/globals')

test('normalizeURL strip', () => {
    const input = 'https://blog.boot.dev'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev'
    expect(actual).toEqual(expected) 
})

test('normalizeURL http situation', () => {
    const input = 'http://blog.boot.dev'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev'
    expect(actual).toEqual(expected) 
})

test('normalizeURL capital', () => {
    const input = 'https://blog.BOOT.dev'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev'
    expect(actual).toEqual(expected) 
})

test('normalizeURL strip for /', () => {
    const input = 'https://blog.boot.dev/path/'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected) 
})

test('normalizeURLfromHTML absolute url', () => {
    const inputHTML = `
    <html>
        <body>
            <a href="https://blog.boot.dev/">Boot.dev Blog</a>
        </body>
    </html>`
    const inputURL = "https://blog.boot.dev"
    const actual = normalizeURLfromHTML(inputHTML,inputURL)
    const expected = ["https://blog.boot.dev/"]
    expect(actual).toEqual(expected) 
})

test('normalizeURLfromHTML relative url', () => {
    const inputHTML = `
    <html>
        <body>
            <a href="/path/">Boot.dev Blog</a>
        </body>
    </html>`
    const inputURL = "https://blog.boot.dev"
    const actual = normalizeURLfromHTML(inputHTML,inputURL)
    const expected = ["https://blog.boot.dev/path/"]
    expect(actual).toEqual(expected) 
})

test('normalizeURLfromHTML multiple links', () => {
    const inputHTML = `
    <html>
        <body>
            <a href="/path/">Boot.dev Blog</a>
            <a href="/home/">Home</a>
        </body>
    </html>`
    const inputURL = "https://blog.boot.dev"
    const actual = normalizeURLfromHTML(inputHTML,inputURL)
    const expected = ["https://blog.boot.dev/path/","https://blog.boot.dev/home/"]
    expect(actual).toEqual(expected) 
})

test('normalizeURLfromHTML invalid link', () => {
    const inputHTML = `
    <html>
        <body>
            <a href="invalid">Invalid URL</a>
        </body>
    </html>`
    const inputURL = "https://blog.boot.dev"
    const actual = normalizeURLfromHTML(inputHTML,inputURL)
    const expected = []
    expect(actual).toEqual(expected) 
})