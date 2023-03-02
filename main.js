function showElement(){
    document.getElementById('myBtn').classList.remove('hidden');
}

// function playMusic(){
//     document.getElementById('music').play();
// }


setTimeout(showElement,12000);

const btn=document.getElementById('myBtn');
const card=document.getElementById('card');
btn.addEventListener('click',function(){
    document.getElementById('audio').play();
    card.style.display = 'block';
    document.getElementById('music').play();
});


