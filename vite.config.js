const {resolve} = require('path')
import copyVitePlugin from "./build/plugin/vite-plugin-copyVitePlugin.js"
export default {
    // 项目根目录（index.html 文件所在的位置）
    root:'./',
    //公共基础路径
    base:'./',
    // 'development' (开发模式)，'production' (生产模式)
    mode:'development',
    plugins:[
        copyVitePlugin()
    ],
    resolve:{
        //别名
        alias: {
            '@': resolve(__dirname, 'src')
        }
    },
    css:{
        // preprocessorOptions:{
        //     less:{
        //         modifyVars:{},
        //         javascriptEnabled: true
        //     }
        // }
    },
    json:{
        //是否支持从 .json 文件中进行按名导入
        namedExports:false,
        //若设置为 true，导入的 JSON 会被转换为 export default JSON.parse("...") 会比转译成对象字面量性能更好，尤其是当 JSON 文件较大的时候。开启此项，则会禁用按名导入
        stringify:true,
        assetsInclude:'/src/assets/'
    },
    server:{
        port:6888,
        strictPort:true,
        https:false,
        // open:"index.html",
        proxy:{},
        cors:true,
    },
    build:{
        target:"modules",
        // 指定输出路径
        outDir:"dist",
        // 指定生成静态资源的存放路径（相对于 build.outDir）
        assetsDir:"static",
        // 自定义底层的 Rollup 打包配置
        rollupOptions:{},
    }
}