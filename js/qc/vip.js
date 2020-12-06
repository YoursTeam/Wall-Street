$('.btn').click(()=>{
    let thp=$('.inp').val()
    let verify=$('.verify').val()
    
})
$('.yan').click(()=>{
    console.log(1)
    $.ajax({
        type:'psot',
        url:'http://loaclhost:8001/deng',
        success:(res,data)=>{
            console.log(data)
        }
    })
})