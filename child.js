process.on('message',(str)=>{
    console.log('child:',str);
    let arr = []
    let a = 1
    setInterval(()=>{
        for (let i=1;i<100000;i++){
            a++
            arr.push(a)
        }
        process.send(a++)
    },100)
})
