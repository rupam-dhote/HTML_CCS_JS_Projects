const input=document.getElementById("inputbox");
const output=document.getElementById("outputbox");
const button=document.getElementById("btn");
const sel=document.getElementById("s2");
const h=document.getElementsByTagName("h1");
const sel1=document.getElementById("s1");
function check(num){
    for(let i=0;i<num.length;i++)
    {
        if(num[i]!=1&&num[i]!=0)
        {
            return false;
        }
    }

    return true;
}

function change(event)
{
    if(input.value==0&&output.value==0)
        {
            alert("Enter the number !");
            return;
        }
    let text=event.textContent||event.innerText;
    button.classList.toggle("cng");
    h[0].classList.toggle("col");
    if(text == "Convert")
    {
        event.innerText='Clear';
        
       
          
              if(input.value!=0&&output.value==0&&sel.value=="Binary Number"&&sel1.value=="Decimal Number")
               {
                let val=parseInt(input.value);
            
                //converting the decimal value
                
                output.value=val.toString(2);
               }
            
               else if(input.value==0&&output.value!=0&&sel.value=="Binary Number"&&sel1.value=="Decimal Number")
              {
                let bit = output.value;
             
                //checking valid number
               
                if(check(bit))
                {
                  input.value=parseInt(bit,2);
                }
                else{
                     alert("Please Enter The Valid Binary Input")
                }
              }

              else if(input.value==0&&output.value1!=0&&sel.value=="Octal Number"&&sel1.value=="Decimal Number")
              {
                let num = output.value;

                input.value=parseInt(num,8);


              }
              else if(input.value!=0&&output.value==0&&sel.value=="Octal Number"&&sel1.value=="Decimal Number")
              {
                let val=parseInt(input.value);

                output.value=val.toString(8);
              }
              else if(input.value!=0&&output.value==0&&sel.value=="Binary Number"&&sel1.value=="Octal Number")
               {
                let num = input.value;

                let temp=parseInt(num,8);

                output.value=temp.toString(2);


               }
               else if(input.value==0&&output.value!=0&&sel.value=="Binary Number"&&sel1.value=="Octal Number")
               {
                  let val=output.value;
                  let temp;
                  if(check(val))
                  {
                     temp=parseInt(val,2);
                  }
                  else{
                       alert("Please Enter The Valid Binary Input")
                       return;
                  }
                

                  input.value=temp.toString(8);

               }
               else
               {
                if(sel.value=="Octal Number"&&sel1.value=="Octal Number")
                {
                   alert("select different fields");

                }
               }

        
    }
    else{
        event.innerText='Convert';
        input.value=null;
        output.value=null;
    }
    
}


