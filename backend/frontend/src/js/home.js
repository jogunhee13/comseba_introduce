
const moveComsebaPage = () => {
    window.location.href = "http://www.comseba.co.kr/";
};

const moveComsebaInstagram = () => {
    window.location.href = "http://www.youtube.com/channel/UCzSgCAZF86PAE-dk9GAn7kg";
};

const moveComsebaYoutube = () => {
    window.location.href = "http://www.instagram.com/comseba_1992/";
};



const skillDescriptionContent ={
    C: [
        "C언어 환경,c언어 개요 및 특징,컴파일러 사용법,c언어 기본문법",
        "c언어 연산자와 함수, 제오문, 함수와 변수",
        "포인터와 배열, 소트 알고리즘의 이해",
        "문자배열과 포인터 변수를 이용하는 방법의 이해 및 연습",
        "메모리 동적 할당으 이해 및 연습",
        "구조체 배열의 이해 및 구조체 포인터 변수의 이해와 연습",
    ],

    JAVA: [
        "AWT의 개요 및 작성 요령",
        "layout의 종류와 활용",
        "각 컴포넌트별 사용방봅",
        "이벤트의 종류 및 적용 방법",
        "Window, Action, Mouse, MouseMotion 이벤트",
        "key, Focus, Item 이벤트",
    ],

    Python: [
        "파이썬의 개요, 특징 알아보기",
        "파이썬 자료형, 제어문",
        "프로그램 입력 및 출력 알아보기",
        "파이썬 정규 표현 알아보기",
        "파이썬 함수 알아보기",
        "파이썬 클래스 알아보기",
    ],
    
    AI: [
        "파이썬 라이브러리 실습",
        "크롤링,데이터분석,API",
        "AI 이론 학습 (인공지능,기계학습,딥러닝)",
        "KNN AI 실습",
        "선형회귀 AI 실습",
        "실제 AI 적용",
    ],
};


const makeSkillDescription = () => {
    const skillBox = document.querySelectorAll(".home_learn-skills_skill-box");
    
    skillBox.forEach((box) => {

        let skill = "";

        box.addEventListener("click", (e) => {
            console.log("ㅇㅇㅇ");

            skill = e.target.textContent;
            const boxs = document.querySelectorAll(".home_learn-skills_skill-box");


            for (const box of boxs){
                if (box.textContent === skill){
                    box.className = "home_learn-skills_skill-box selected";
                } else {
                    box.className = "home_learn-skills_skill-box"
                }
            }

            makeSkillDescription();
        });
    });
    /*  위   selected 바꾸는거 */
    
    let currentSkill = "";

    for (const box of skillBox) {
        const classList = box.className.split(" ");
        //console.log(classList);

        if(classList.includes("selected")){
            currentSkill = box.textContent;
        }
        //console.log(currentSkill)
    };

    console.log(currentSkill);

    skillDescriptionContent[currentSkill].forEach((comment, idx) => {
        // console.log(`.home__learn-skills__flex-bax .step${idx + 1} p:nth-child(2)`);
        const curStep = document.querySelector(
            `.home_learn-skills_step.step${idx + 1}>p:nth-child(2)`
        );
        

        curStep.textContent = comment;
    });
};

makeSkillDescription();

const skillBox = document.querySelectorAll(".home_learn-skills_skill-box");




//   232p이상  localhost:3000/guest
