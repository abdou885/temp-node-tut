//globals variable available anywhere anytime

//__dirname - path of current directory 
//__filename -file name
//require - function to use modules 
//module - info about current module
//process- info about env where the program is being executed
console.log(__dirname)
setInterval(() => {
    console.log("hello world")
}, 1000);