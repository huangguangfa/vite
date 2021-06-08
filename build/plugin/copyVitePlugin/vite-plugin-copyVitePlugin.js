export default function copyVitePlugin(){
    return {
        name:"copyVitePlugin",
        options(){
            console.log(arguments)
        },
        closeBundle(){
            console.log('jieshule')
        }
    }
}

