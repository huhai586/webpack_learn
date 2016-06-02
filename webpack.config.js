/**
 * Created by haihu on 2016/6/2.
 */
// var webpack = require('webpack');
// console.log("huhai")

module.exports = {
    entry : "./test.js",
    output : {
        path : "./dist",
        filename : "bundle.js"
    },
    module : {
        loaders :[
            {test : /\.css$/,loader:"style!css"},
            {
                test:/\.js$/,loader:"babel-loader",query:{presets: 'es2015'}
            }
        ]
}
};