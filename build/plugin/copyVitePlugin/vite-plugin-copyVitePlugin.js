import { globby } from "./globby.js";
export default function copyVitePlugin(options){
     async function getAssets(){
        //把from的资源复制到to中
        const { from,ignore } = options;
        //补齐
        const to = options.to ? options.to : '.';
        //获取运行指令的目录
        const context = compiler.options.context;
        //将输出路径变成绝对路径
        const absoluteFrom = path.isAbsolute( from ) ? from : path.join( context,from );
        //globby(要处理的文件夹)，第二个参数是忽略的文件
        const paths = await globby( absoluteFrom ,{ ignore } );
        //读取文件内容
        const files = await Promise.all(
            paths.map( async file_info =>{
                const { file_path,file_name } = file_info;
                const file_data = await fs.readFileSync( file_path );
                let filename = path.join(to,file_name)
                return { file_data, filename }
            })
        )
         debugger
         console.log("assets",files)
        //生成webpack资源
        // const assets = files.map( file =>{
        //     const { file_data,filename } = file;
        //     const source = new RawSource(file_data);
        //     return { source, filename }
        // })
    }
    return {
        name:"copyVitePlugin",
        closeBundle(){
            getAssets()
            console.log('jieshule',this)
        }
    }
}

