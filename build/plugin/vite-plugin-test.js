export default function test(){
    return {
        name:"test-vite-plugin",
        resolveId(id){

        },
        load( file ) {

        },
        transform(file, fileUrl) {
            if( typeof fileUrl === "string" && fileUrl.includes('assetas.js')){
                return file += "const name = 'LIS';console.log(name);"
            }
        },
        buildEnd( file,id,aa ){
            console.log('buildEnd',file,id,aa)
        },
        closeBundle( file, id, aa ){
            console.log('closeBundle',file, id, aa)
        },
        //run build can
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