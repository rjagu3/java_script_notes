const flag = true

if(!flag)
{
console.log("conditoin satisfied")
}
else
{
    console.log("Condition not satisfied")
}
var i=5
while(i>0)
{
    console.log(i)
    i=i-1
}

for(let k=0;k<=10;k++)
{
    console.log(k)
}

// multiples of 2 and 5
console.log("This is multipls of 2 and 5")
n=0
for(let j=1;j<=100;j++)
{
    if(j%2==0 && j%5==0)
    {
        n++
        console.log(j)
        if(n==3){
            break
        }
    }
    
}
