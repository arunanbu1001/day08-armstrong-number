let a = 153;
let s = 0;
let c;
let arm = a;
while ( a > 0)
{
    reminder = a % 10;
    c = reminder ** 3;
    s = s + c;
    a = a - reminder;
    a = a / 10;
}
if(arm == s)
{
    console.log(+arm+"is armstrong number");
}
else
{
    console.log(+arm+"is not armstrong number");
    
}