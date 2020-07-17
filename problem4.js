// get tiny name.
function tinyFriend(arr)
{
    var shortLength = Infinity;
    var shortest ="";
    if(arr.length >0)
    { 
        for(var i=0; i<arr.length;i++)
        {
            if( typeof arr[i] == 'string' && arr[i].length<shortLength)
            {
                shortest =arr[i];
                shortLength= arr[i].length;

            }
        }
    }
    return shortest;

}
var result = tinyFriend(['jesu','sharmin','yeachmin']);
console.log(result);
