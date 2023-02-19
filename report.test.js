const { crawlingReport } = require('./report.js')
const { test, expect } = require('@jest/globals')

test('crawlingReport with 2 pages', () => {
    const input = {
        'https://wagslane.dev/path':2,
        'https://wagslane.dev':4
    }
    const actual = crawlingReport(input)
    const expected = [
        ['https://wagslane.dev',4],
        ['https://wagslane.dev/path',2]
    ]
    expect(actual).toEqual(expected)
})

test('crawlingReport with 8 pages', () => {
    const input = {
        'https://wagslane.dev/path1':3,
        'https://wagslane.dev':4,
        'https://wagslane.dev/path2':1,
        'https://wagslane.dev/path3':9,
        'https://wagslane.dev/path4':5,
        'https://wagslane.dev/path5':7,
        'https://wagslane.dev/path6':12,
        'https://wagslane.dev/path7':15
    }
    const actual = crawlingReport(input)
    const expected = [
        ['https://wagslane.dev/path7',15],
        ['https://wagslane.dev/path6',12],
        ['https://wagslane.dev/path3',9],
        ['https://wagslane.dev/path5',7],
        ['https://wagslane.dev/path4',5],
        ['https://wagslane.dev',4],
        ['https://wagslane.dev/path1',3],
        ['https://wagslane.dev/path2',1],
    ]
    expect(actual).toEqual(expected)
})