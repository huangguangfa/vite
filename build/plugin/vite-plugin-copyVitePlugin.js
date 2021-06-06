export default function copyVitePlugin(){
    return {
        //用于将来的报错提醒、
        name:"test-vite-plugin",
        // 通用钩子
        //---- 以下钩子在服务器启动时被调用
        //替换或操纵Rollup选项、影响打包的行为
        option(){

        },
        //开始创建
        buildStart(){

        },
        //----- 以下钩子每次有模块请求都会被触发
        //确认当前请求的模块是谁、在里面可以对一些过滤操作、如果return 的是当前source、那么Vite就不会再去询问当前被return source模块了、source是模块名称
        resolveId( source ){
            if(source === 'test-module'){
                return source  //命中后、vite不在询问其他插件处理改模块
            }
            return null; // 返回null 表示继续执行
        },
        //加载模块代码
        load( fileName ) {
            console.log('fileName',fileName)
            if(fileName.includes("test-module")){
                return "export default function test(){}"
            }
            return null;
        },
        transform(file, fileUrl) {
            // if( typeof fileUrl === "string" && fileUrl.includes('assetas.js')){
            //     return file += "const name = 'LIS';console.log(name);"
            // }
        },
        // 以下钩子在服务器关闭时被调用：
        buildEnd( file,id,aa ){
            // console.log('buildEnd',file,id,aa)
        },
        closeBundle( file, id, aa ){
            // console.log('closeBundle',file, id, aa)
        },
        //修改Vite配置
        config( config,serve ){
            // console.log('config',config,serve)
        },
        //
        configResolved( resolvedConfig ){
            // console.log('resolvedConfig',resolvedConfig)
        },
        transformIndexHtml( html ){
            // console.log('transformIndexHtml',html)
        }
    }
}

