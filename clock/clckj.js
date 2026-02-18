const hour=document.getElementById('hour');
const mint=document.getElementById('mint');
const second=document.getElementById('sec');

function displaytime(){
  let date =new Date();
  
  let hr=date.getHours();
  let mi=date.getMinutes();
  let sec=date.getSeconds();

  let hrotation=30*hr+(mi/2);
  let mrotation=6*mi;
  let srotation=6*sec;

  hour.style.transform=`rotate(${hrotation}deg)`;
  mint.style.transform=`rotate(${mrotation}deg)`;
  second.style.transform=`rotate(${srotation}deg)`;
}

setInterval(displaytime,1000);