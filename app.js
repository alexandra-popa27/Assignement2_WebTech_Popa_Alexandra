const input="Subsemnetul ...,domiciliat in ...";

const tokens=[
    {
        tokenName:"Jane Doe"
    },
    {
        tokenName:"626 Park Ave, Albany, New York"
    }
];

function addTokens(input,tokens){
    
    if(typeof(input)!='string') throw new Error('Input shoud be a string')

    if(input.length<6) throw new Error('Input should have at least 6 characters')

    tokens.forEach(token=>{
        if(typeof token.tokenName !== "string"){
             throw new Error("Invalid array format");
        }
   });

   if(!input.includes("..."))
   {
        return(input);
   }
   else
   {
        tokens.forEach(token=>{
            input = input.replace("...",token.tokenName);
        })
        return input;
   }
}

console.log(addTokens(input,tokens));