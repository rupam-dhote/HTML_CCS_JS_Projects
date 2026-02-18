let input=document.getElementById('inputbox');
let buttons=document.querySelectorAll('button');

let string="";

let arr=Array.from(buttons);

arr.forEach(button=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            if(string=="")
            {
                input.value=0;
            }
            else if(string.includes("%"))
            {
                if(string[0]>"0"&&string[1]=="%")
                {
                    let tem=string[0];
                    string=tem/100;
                    input.value=string;
                    string="";

                    return;
                }
                if(string[0]=="%"||string.includes("+%")||string.includes("%%")||string.includes("-%")||string.includes("/%"))
                {
                    input.value=0;
                    string="";
                    return;
                }
                let ans="";
                for(let i=0;i<string.length;i++)
                {
                    if(string[i+1]=="%")
                    {
                       let temp=string[i];
                       let tem=string[i-2];
                        ans=string.slice(i-2,i);
                       ans+=(tem*temp)/100;
                       ans=eval(ans);
                       string="";
                       input.value=ans;
                    }
                };
            }
            else
            {
                if(string.includes("/0"))
                {
                    input.value="Not define";
                    string="";
                    return;
                }
        
            string=eval(string);
            input.value=string;
            }
        }
        else if(e.target.innerHTML=='AC'){
            string="";
            input.value=string;
            input.value=0;

        }
        else if(e.target.innerHTML=='Del'){
            string=string.substring(0,string.length-1);
            input.value=string;
            if(string=="")
            {
                input.value=0;
            }
          
        }else{
            string+=e.target.innerHTML;
            input.value=string;
        }
    })
})