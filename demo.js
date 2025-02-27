// var change=document.querySelector('h3');
// var addmenu=document.querySelector('#add');
// var removemenu=document.querySelector('#remove');
// var add1menu=document.querySelector('#add1');
// var imgchange=document.querySelector('#img1');
// var img=document.querySelector('.main');

// addmenu.addEventListener('click',function()
//     {
// if(true)
// {
//         change.innerHTML="juice"
//         change.style.color="green"
//         imgchange.src="juice.jpg"
//         img.style.backgroundColor="red"
//     }
//     else
//         {
//             img.style.backgroundColor="black"
//         }
//     })

// removemenu.addEventListener('click',function()
// {
//     change.innerHTML="cakes"
//     change.style.color="blue"
//     imgchange.src="cakes.jpg"
//      img.style.backgroundColor="black"
// });

// add1menu.addEventListener('click',function()
// {
//     change.innerHTML="ice cream"
//     change.style.color="maroon"
//     imgchange.src="icecream.jpg"
//     img.style.backgroundColor="green"
// });

var color = document.querySelector('#main')
var date = new Date();
console.log(date);
color.innerHTML = "date :" + date;

var center = document.querySelector('#top')
var day = date.getDay()
console.log(day);
center.innerHTML = "day :"+ day;

var middle = document.querySelector('#bottom')
var hour = date.getHours()
console.log(hour)
bottom.innerHTML = "hour :"+ hour;

var low = document.querySelector('#square')
var msec = date.getMilliseconds()
console.log(msec)
square.innerHTML = "M sec :"+ msec;

var high = document.querySelector('#loop')
var year = date.getFullYear()
console.log(year)
loop.innerHTML="year :"+ year;

var change=document.querySelector('#change')
var btn=document.querySelector('#btn1')
btn.addEventListener('click',function()
{
    var random = Math.random();
    var num = (random)*1000000
    var num1 = Math.floor(num)  
    console.log(num1)
    change.style.backgroundColor= `#${num1}`
}
)








