function hasDuplicate(arr)
{ 
    let uniqueSet = [...new Set(arr)];
    return arr.length !==uniqueSet.length;
}

function vowelCount(string)
{
    const newString = string.toLowerCase();
    const newMap = new Map();
    const vowel = "aeiou";
    //console.log(newString);
    for(let val of newString)
    {
        if(vowel.includes(val))
        {
            //console.log(val);
            if(newMap.has(val))
            {
                //console.log(val);
                newMap.set(val, newMap.get(val) + 1);
            }
            else{
                //console.log(val);
                newMap.set(val, 1);
            } 
        }
 
        
    }
    return newMap;

}