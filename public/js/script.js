$(()=>{
    list=[]
    $.get("/getTasks")
    .then((list)=>{
        list.forEach(task => {
            if(task.date == "") return
    
            let time = (task.date + "-" + task.time).split("-").map(val => Number(val));
    
            let taskDate = new Date(time[0], time[1]-1, time[2], time[3], time[4])
            let now = new Date();
            now.setSeconds(0);
            now.setMilliseconds(0);

            if(taskDate >= now){
                setTimeout(()=>{

                    const audio = new Audio("sounds/alarm.mp3");
                    audio.loop = true;

                    audio.play().then(()=>{
                        $("#modal-content").html(`It's time to complete your task!<br>Task: ${task.content}`);
                        $("#modal").css("opacity", 1);

                        const btn = $("#btn-modal");

                        btn.click(()=>{
                            $("#modal").css("opacity", 0);
                            audio.pause();
                        })
                    });

                }, taskDate - now);
            }
        });
    });

    
});