async function getComment(){
    const response = await fetch("http://localhost:3000/comment");
    const jsonData = await response.json();

    return jsonData;
}

const postComment = async (param) => {
    console.log(param);
    const res = await fetch("http://localhost:3000/createcomment", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(param),
    });
    return await res.json();
};

// 시간
const elapsedTime = (start, end) => {
    const diff = (end - start)/1000;
    // console.log(end)
    // console.log(start)
    const times =  [
        { name: "년", milliSeconds: 60*60*24*365},
        { name: "개월", milliSeconds: 60*60*24*30},
        { name: "일", milliSeconds:60*60*24},
        { name: "시간", milliSeconds:60*60},
        { name: "분", milliSeconds:60}
    ];

    for (const value of times){
        const betweenTime = Math.floor(diff / value.milliSeconds);
        // console.log(diff)
    
        if (betweenTime > 0){
            return `${betweenTime}${value.name} 전`;
        }
    
    }
    return "방금 전";
};
//시간

// console.log(getComment())


const makeComment = async () => {
    const db = await getComment();

    const commentArea = document.querySelector(".guest__comment-area");
    const htmlList = db.commentList.map((info) => {
        //시간
        const date = info.time.split("-");

        const time = new Date(...date);

        const curTime = new Date();
        
        // console.log(time, curTime);
        const timeStr = elapsedTime(time, curTime);
        // console.log(timeStr)
        // console.log(info.time.split("-"));
        //시간
        
        return `<div class="guest__comment">
        <div class="guest__comment__left">
            <div class="guest__comment__left__name">${info.name}</div>
        </div>
        <div class="guest__comment__right">
            <div class="guest__comment__right__text">
                ${info.comment}
            </div> 
            <div class="guest__comment__right__time">${timeStr}</div>
        </div>
    </div>`;
    });

    const html = htmlList.reduce((a, c) => a + c , "");

    commentArea.innerHTML = html;
};

makeComment();

// 댓글 추가
const commentBtn = document.querySelector(".guest__form button");

commentBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    const name = document.querySelector(".guest__form input");
    const comment = document.querySelector(".guest__form textarea");

    const time = new Date();
    const timeStr = `${time.getFullYear()}-${time.getMonth()}-
    ${time.getDate()}-${time.getHours()}-${time.getMinutes()}-${time.getSeconds()}`;

    console.log(name.value, comment.value, timeStr);

    const state = await postComment({
        name: name.value,
        comment: comment.value,
        time: timeStr,
    });
    console.log(state);
    if (state){
        window.location.reload();
    }
});


 

//문제 댓글 삭제 기능을 추가해 보자


// 250p하는중