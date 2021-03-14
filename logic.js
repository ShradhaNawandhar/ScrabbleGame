let letters=document.getElementById("letters")
let Answer=document.getElementById("Answer")
let btn=document.querySelector("#btn")
let score=document.getElementById("score")
let play=false
let newWord="";
let RandomWord="";
let Yourscore=00;

let arr=["about","after","again","always","among","area","animal","back","base","before","best","bird","boat","black","busy","care","call","come","cross","city","check","color","dark","day","down","draw","deep","east","effort","earth","face","farm","first","fish","game","grow","girl","half","hear","help","into","just","keep","kind","late","lead","learn","long","life","mean","mile","mind","next","note"]

const createWords=()=>{
    let randomNum=Math.floor(Math.random()*arr.length)//We dont need numbers more than the length of an array
    let tempWord=arr[randomNum];
    return tempWord;
}


const ScrabbleWord=(word)=>{
    let WordArray=word.split("")
    console.log(WordArray)
    for(let i=WordArray.length-1;i>=0;i--){
        let temp=WordArray[i]
        let j=Math.floor(Math.random()*(i+1))
        WordArray[i]=WordArray[j]
        WordArray[j]=temp
    }
    console.log(WordArray)
    let ScrabbleWord=WordArray.join("")
    return ScrabbleWord;
}

btn.addEventListener('click',()=>{
    console.log(Yourscore)
    if(!play)
    {
        play=true
        btn.innerText="Guess"
        Answer.classList.toggle('hidden')//it is used to add or remove a classname fro an element with js
        newWord = createWords();
        RandomWord=ScrabbleWord(newWord);
        if(newWord==RandomWord)
            RandomWord=ScrabbleWord(newWord);
        letters.innerText=RandomWord

    }
    else{
        tempWord=Answer.value;
        if(tempWord===newWord)
        {
            play=false//as the aswer is correct
            letters.innerText=`Awesome! its Correct. The word is ${newWord}`
            Yourscore+=5
            console.log(Yourscore)
            score.innerText=`Your Score :${Yourscore}`
            btn.innerText="Start Again"
            Answer.value=""
            Answer.classList.toggle('hidden')
        }
        else{
            letters.innerText=`Sry its Incorrect. Plz try again: ${RandomWord}`
            Answer.value=""
        }
    }
})