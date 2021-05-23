// import { defineConfig } from 'vite'
const {resolve} = require('path')
export default {
    // 项目根目录（index.html 文件所在的位置）
    root:'./',
    //公共基础路径
    base:'./',
    // 'development' (开发模式)，'production' (生产模式)
    mode:'development',
    plugins:[],
    //别名
    alias: {
        '@': resolve(__dirname, 'src')
    }
}