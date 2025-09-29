// nested if else

let winning =19;
let userGuess = 19;

if(userGuess == winning){
    console.log("user guess is correct ");

}
else{
    if(userGuess < 19){
        console.log("usergues is less than winning ");
    }
    else{
        console.log("user guess is greater than winning ");
    }
}