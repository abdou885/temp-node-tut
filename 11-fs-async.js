// const {readFile,writeFile}=require('fs')
// console.log('start')
// readFile('./content/first.txt','Utf8',(err,result)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//    const first=result;

//    readFile('./content/second.txt','utf-8',(err,result)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//    const second=result;
//    writeFile(
//     './content/result-async.txt',
//      `Here is the result: ${first}, ${second}`
//      ,(err,result)=>{
//         if(err){
//             console.log(err)
//             return
//         }
//         console.log('done with this task')
//      }
// )
//    })
// })
// console.log('starting next task')



const {readFile,writeFile}=require('fs').promises
console.log('start')
async function ReadandWrite() {
    try{
        const first=readFile('./content/first.txt','utf8')
        const second=readFile('./content/second.txt','utf8')
        await writeFile('./content/result-promise.txt',`the result is ${first,second}`)
        console.log('done with task')
    }
    catch(err){
        console.log(err)
    }
   
}

ReadandWrite()
console.log('starting next task')