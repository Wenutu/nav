module.exports = {
    // 禁止hash name
    filenameHashing:false,
    publicPath:'/',
    devServer:{
        historyApiFallback:{
            index:'/index.html'
        }
    }
}