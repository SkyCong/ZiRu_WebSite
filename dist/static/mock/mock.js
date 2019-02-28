
module.exports = () => { 
    return {
        a: require('./a.json'),//   /a
        b: require('./b.json'),//   /b
        banner: require('./banner.json'),
        recommend: require('./recommend.json')
    }
}


// /a/aa -> /a