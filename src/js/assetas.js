import logoImg from '../image/icon.jpeg';
// const logoImg = require('../image/icon.jpeg');

import { testFn } from '@/alias/root';  
testFn()

//test babel
async function asyncfn(){
    const reslut = await  new Promise( resolve => {
        setTimeout(() =>{
            resolve({
                scuess:true,
                result:'成功'
            })
        },3000)
    })
    console.log('async',reslut)
}

asyncfn()

document.querySelector('.vite_img').src = logoImg;