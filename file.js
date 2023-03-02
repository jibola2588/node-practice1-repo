const fs = require('fs')


// reading file
// fs.readFile('./docs/blog1.txt',(err,data) => { 
//     if(err){ 
//         console.log(err)
//     }
//     console.log(data.toString())
// })


// writing file
if(!fs.existsSync('./stream.js')){ 
    fs.writeFile('./stream.js','games is on',() => {
        console.log('file is created')
    })
}
// fs.writeFile('./docs/blog2.txt','a hope for a better country',() => { 
//     console.log('file was written')
// })


// directories 
// if(!fs.existsSync('./assets')){ 
//     fs.mkdir('./assets',(err) => { 
//        if(err){ 
//         console.log(err)
//        }
//     })
//     console.log('dir is created')
// }else{ 
//     fs.rmdir('./assets',(err) => { 
//         if(err){ 
//             console.log(err)
//         }
//         console.log('dir is removed')
//     })
// }


// deleting files   
if(fs.existsSync('./docs/remove.txt')){ 
    fs.unlink('./docs/remove.txt',(err) => { 
        if(err){ 
            console.log(err)
        }
    })
    console.log('file removed successfully')
}
