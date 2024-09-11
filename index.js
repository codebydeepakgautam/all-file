$(document).ready(function humburgo (){
    $('#icon').click(function (){
        $('ul').toggleclas('show');
    });

});

function f1(){
open("https://youtu.be/Ap7CjB-dVqE")
}
function humburgo(){
    const ul = document.querySelector("dropdown");
    ul.style.transform = "translate(opx)"
}




function abc(){
    alert("welcome to my page !")
}

function insta(){
open("https://www.instagram.com/official_dkjatav01/");

    
}


const typed = new typed('.multiple-text',{
String:['frontend Developer','website Designer','youtuber'],
typespeed:70,
backspeed:70,
backdelay:1000,
loop:true,
});



const multiple-text = [
"Developer",
"designer",
"youtuber"
]
let speed =100;
const textElements = document.querySelector("multiple-text");
let textIndex = 0;
let charcterIndex = 0;
function multiple-text(){
if(charcterIndex < texts[textIndex].length){
    textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
    charcterIndex++;
    setTimeout(multiple-text,speed);

}
else{
    setTimeout(erasetext,1000);
}
}
window.onload = typewriter;