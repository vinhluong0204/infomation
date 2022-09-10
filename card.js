var x=document.querySelector('.nut');
x.addEventListener('click',function(){
    document.querySelector('.an').classList.toggle('hien');
});
x.addEventListener('click',function(){
    document.querySelector('.ann').classList.toggle('hien');
});
var y=document.querySelector('.an');
var z=document.querySelector('.ann');
y.addEventListener('click',function(){
    document.querySelector('.sdt').classList.toggle('sdtt');
});
z.addEventListener('click',function(){
    document.querySelector('.gma').classList.toggle('gmaa');
});