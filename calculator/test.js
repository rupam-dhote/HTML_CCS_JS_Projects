let string ="5-5%";
let ans="";
if(string.includes("%"))
{
    for(let i=0;i<string.length;i++)
    {let temp=0;
        if(string[i+1]=="%")
        {
           temp=string[i];
           let tem=string[i-2];
            ans=string.slice(i-2,i);
           ans+=(tem*temp)/100;
           ans=eval(ans);
           string=string.replace(string.substring(i+1,i+2),ans);
           console.log(ans);
        }
    }
    

}