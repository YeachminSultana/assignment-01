
// calculate brick.
function brickCalculator(floor)
{
    
    for(var i=0; i<floor;i++)
    {
    if(floor<=10)
    {
        return brick=1000*15;
    }
   else  if(floor <= 20)
    {
        return brick=1000*12;
    }
    else 
    {
        return brick=1000*10;
    }
    
    }
}
var result= brickCalculator(26)
console.log(result);