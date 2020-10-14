const path = require('path');

module.exports = { 
    webpack: { 
        configure: { 
            target: 'electron-renderer' 
        },
        alias: {
            "@Components": path.resolve(__dirname, 'src/components'),
            "@Utils": path.resolve(__dirname, 'src/utils'),
            "@Assets": path.resolve(__dirname, 'src/assets'),
            "@App": path.resolve(__dirname, 'src/App.js')
        },
    } 
};