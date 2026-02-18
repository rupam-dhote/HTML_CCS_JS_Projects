const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
let arrayParticle = [];
const button = document.getElementById("container");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let hue = 0,sat=100,lig=50;
let colorvalue=null;
let opacity=0.08;
let flag=true;
let speed=null;
button.addEventListener("click", () => {
  button.style.display = "none";
  document.getElementById('colorScheme').style.display='block';
  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(100, 100, 50, 0, 2 * Math.PI);
  });

  const mouse = {
    x: null,
    y: null,
  };

//to handle user input color ***********************************
  
const colorInput = document.getElementById('colorInput');
colorInput.addEventListener('input',()=>{
  colorvalue=colorInput.value;
})

//To handle colorcycle input ************************************

  const colorcycle=document.getElementById('colorcycle');
  colorcycle.addEventListener('click',()=>{
    colorvalue=null;
    speed=2;
  })

//to handle opacity input ****************************************
 
 document.getElementById('opacityInput').addEventListener('input',e=>{
  if(e.target.value/100==0.1)
  {
    opacity=1;
  }
  else{
    opacity=e.target.value/100;
  }
 })

 //****************************************************************
  canvas.addEventListener("click", (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
    for (let i = 0; i < 10; i++) {
      arrayParticle.push(new particle());
    }
  });

  class particle {
    constructor() {
      this.x = mouse.x;
      this.y = mouse.y;
      this.size = Math.random() * 10 + 1;
      this.speedX = Math.random() * 3 - 1.5;
      this.speedY = Math.random() * 3 - 1.5;

      if(colorvalue!=null)
      {
        this.color = `${colorvalue}`;
      }
      else{
      this.color = `hsl(${hue},${sat}%,${lig}%)`;
      }
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.size > 0.2) this.size -= 0.1;
    }
    draw() {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
      ctx.fill();
    }
  }

  canvas.addEventListener("mousemove", (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
    for (let i = 0; i < 2; i++) {
      arrayParticle.push(new particle());
    }
  });

  function animate() {
    ctx.fillStyle = `rgba(0,0,0,${opacity})`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    handleParticle();
    requestAnimationFrame(animate);
   
    if(speed!=null)
    {
      hue += speed;
    }
      
    
    
  }

  function handleParticle() {
    for (let i = 0; i < arrayParticle.length; i++) {
      arrayParticle[i].update();
      arrayParticle[i].draw();
      for (j = i; j < arrayParticle.length; j++) {
        const dx = arrayParticle[i].x - arrayParticle[j].x;
        const dy = arrayParticle[i].y - arrayParticle[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          ctx.strokeStyle = arrayParticle[i].color;
          ctx.beginPath();
          ctx.lineWidth = 0.1;
          ctx.moveTo(arrayParticle[i].x, arrayParticle[i].y);
          ctx.lineTo(arrayParticle[j].x, arrayParticle[j].y);
          ctx.stroke();
          ctx.closePath();
        }
      }

      if (arrayParticle[i].size <= 0.3) {
        arrayParticle.splice(i, 1);
        i--;
      }
    }
  }
  animate();
});

