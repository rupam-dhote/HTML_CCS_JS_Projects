const para = document.getElementsByTagName("p");
const inputArea = document.getElementsByClassName("inputarea");
const inputFeild = document.getElementById("inputfeild");
const box = document.getElementsByClassName("box");
const front=document.getElementById("front");
let rows =5;
let valueForFuction=0;
const btn=document.getElementById("reset");
const butons=document.getElementsByTagName("button");
const heder=document.getElementsByClassName("hederSection");


function createPattern() {
  inputArea[0].style.display = "none";
  rows = parseInt(inputFeild.value);
  
  box[0].style.display = "flex";

  switch(valueForFuction)
  {
    case 1:
      {
        draw_piramid();
        break;
      }
    case 2:
      {
        draw_Right();
        break;
      }
    case 3:
      {
        draw_daimond();
        break;
      }
  }
}

Array.from(butons).forEach((e)=>{
  e.addEventListener("click",()=>{
    switch(e.innerText)
    {
      case "Pyramid":{
        heder[0].style.display='none';
        valueForFuction=1;
        front.style.display='none';
        inputArea[0].style.display='flex';
        break;
      }
      case "Right Angle Triangle":{
        heder[0].style.display='none';
        valueForFuction=2;
        front.style.display='none';
        inputArea[0].style.display='flex';
        break;
      }
      case "Daimond":{
        inputFeild.Max='20';
        heder[0].style.display='none';
        valueForFuction=3;
        front.style.display='none';
        inputArea[0].style.display='flex';
        break;
      }
    }
  })
})


function draw_piramid()
{
  
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < rows * 2; j++) {
      if (j >= rows + 1 - i && j <= rows * 2 - rows - 1 + i)
        para[0].innerHTML += "&nbsp*";
      else para[0].innerHTML += "&nbsp";
    }
    para[0].innerHTML += "</br>";
  }
}

function draw_Right()
{
  for(let i=1;i<rows;i++)
  {
    for(let j=1;j<rows;j++)
    {
      if (j <= i)
        para[0].innerHTML += "*&nbsp &nbsp";
      
    }

    para[0].innerHTML+="</br>";
  }
}

function draw_daimond()
{
  rows=(rows%2==0)?rows+1:rows;
  let k=0;
  for(let i=1;i<=rows;i++)
  {
    for(let j=1;j<=rows;j++)
    {
       if(j>=parseInt(rows/2)+1-k&&j<=parseInt(rows/2)+1+k)
       {
        para[0].innerHTML+="*";
       }
       else{
        para[0].innerHTML+="&nbsp";
       }
    }
    para[0].innerHTML+="</br>";
    (i<(parseInt(rows/2)+1))?k++:k--;
  }
  para[0].style.transform="rotate(90deg)";
 
  btn.style.right='10%';
}



function reset()
{
  para[0].style.transform='rotate(360deg)';
  btn.style.right='20%'
  para[0].innerHTML = "";
  box[0].style.display = "none";
  inputArea[0].style.display = "none";
  front.style.display='flex';
  heder[0].style.display='flex';
  inputFeild.value='5';
}