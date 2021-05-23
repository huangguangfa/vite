前言
    CJS === commonjs规范
    ESM === es6模块规范
    HMR === 热更新



webpack打包流程：通过js入口去扫描这些应用引入的子模块、等模块全部被解析完后、其中包括一些动态模块也会被解析、然后把这些模块注入到index.js中、
                然后启动devserve等待访问！项目越来越大启动时间就会越来越长、但是其实很多时候首屏所使用的js都是比较少的

vite打包流程：启动devserve服务、利用es6模块 import 会以请求的方式加载模块、因为首屏只有少量的js模块、而且动态的模块是不会被加载进来的、所以这比webpack打包启动要快的原因！
    vite所带来的问题
        1、文件 Transform性能问题;
            一、模块转换的时候尽可能使用性能高的工具;
            二、缓存Transform结果 - Broswer cache + Serve cache;
        2、非ESM模块兼容比如，TS..JSX..css等;
            使用esbuild去转换非ESM模块 代替TSC/Babel;
        3、broswer ESM不能加载node模块、
            一、案例（node 模块不能直接加载)
                improt { created } = from 'vue';
                import { created } = '/node_module/vue/dist/vue.runtime.esm-bundler.js?v=9ebasjs'
            二、解决方案：使用ex-module-lexer这个工具扫描import语法、然后使用magic-string重写node模块引入路径
        4、node的其他问题
            issue1：Node CJS模块兼容
                一、将CJS模块转换ESM模块、在打包的时候会有文件的元信息、然后对CJS的做转换
                （但是这样是比较消耗性能的）、所以vite会默认的写入的到node_mdule下的.vite文件、并且写上node的版本、
                等下次使用的时候就会检测node版本如果版本匹配的话就直接使用缓存内容、这也是一个优化！
                ⚠注意：有可能会遇到修改了CJS模块不更新的操作、可以加上--vite的一个标记、让vite不使用缓存
            issue2：Node 模块请求数量较多、需要一个一个文件请求、在vite里面一个文件就是一个请求、文件一多加载就会变慢 
                一、解决方案：将Node模块打包成一个文件、减少页面的请求次数、提高加载速度、然后可对模块打上缓存标记

    vite依赖优化工具
        v1版本：Rollup + @rollup/plugin-commonjs
            issue1：你需要配置好预打包模块、v2版本会自动扫描无需添加配置

        v2版本：esbuild -依赖扫描

    

不懂的名词：
    ex-module-lexer
    magic-string
    broswer ESM
    ESM HMR
    WMR
    
