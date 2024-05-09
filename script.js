let easyfe =document.getElementById('easy');
let mediumfe =document.querySelector('#medium');
let hardfe =document.querySelector('#hard');
let totalfe=document.querySelector('#total');
// console.log(easyfe);
// console.log(mediumfe);
// console.log(hardfe);
// console.log(totalfe);

const requrl ='https://alfa-leetcode-api.onrender.com/Abhishek-Pandey/solved';
const xhr= new XMLHttpRequest();
xhr.open('GET',requrl);
xhr.onreadystatechange= function (){
    // console.log(xhr.readyState);
    if (xhr.readyState === 4){
        
        const data = JSON.parse(this.responseText);/* when the data come by url the it also come as datatype of string . we convert it into object create a JSON file*/
        // console.log(data);
        // console.log(typeof data);
        const easylc =data.easySolved ;
        const hardlc=data.hardSolved;
        const mediumlc = data.mediumSolved;
        const totallc =data.solvedProblem ;
        easyfe.innerHTML =easylc;
        mediumfe.innerHTML= mediumlc;
        hardfe.innerHTML =hardlc;
        totalfe.innerHTML=totallc ;
        // console.log("easy " ,easylc);
        // console.log("hard",hardlc);
        // console.log("medium",mediumlc);
        // console.log("tatal",totallc);
    //     console.log("",typeof data.easySolved)
    //     console.log(typeof data.hardSolved)
    //     console.log(typeof data.mediumSolved)
    //     console.log(typeof data.solvedProblem)
    //     console.log(typeof data.easySolved)
    //     console.log(typeof data.acSubmissionNum[2].count)
    //     console.log(typeof data.acSubmissionNum[3].count)
    //     console.log(typeof data.acSubmissionNum[0].count)
    //     easy.innerHTML =data.easySolved;
    //     medium.innerHTML =data.acSubmissionNum[2].count;
    //     hard.innerHTML =data.acSubmissionNum[3].count;
    //    total.innerHTML= data.acSubmissionNum[0].count;
      
    }
}
xhr.send();