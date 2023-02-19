const { normalizeURL } = require('./crawl.js')
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