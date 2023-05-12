$(()=>{
    const title = "To-do List";
    let cur = "";
    let time = 0;

    for(let i = 1;i<=title.length;++i){
        if(title[i-1] == ' '){
            setTimeout(()=>{
                cur+=" ";
            }, time)
            continue;
        }
        setTimeout(()=>{
            cur+= title[i-1];
            $(".title h1").text(cur);
        }, time+= 500)
    }
});