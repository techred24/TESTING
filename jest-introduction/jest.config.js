module.exports = {
    // setupFiles: ['./jest.setup.js'],
    // transform: { "node_modules/node-fetch/.+\\.(j|t)sx?$" },
    transformIgnorePatterns: ["/node_modules/?!(node-fetch)/"]
    // transformIgnorePatterns: ['node_modules/node-fetch/**.js'],
    // transform: {
    //     // '/node-fetch/': 'node-fetch'
    //     // '\\.[jt]sx?$': 'node-fetch'
    //     // "node_modules/node-fetch/.+\\.js?$": "node-fetch"
    // }
}
