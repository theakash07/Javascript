//javascript calculator
let a=prompt("Enter a:")
let b=prompt("Enter b:")
let exp=prompt("Press\n 1. Addition\n 2. Substraction \n 3. Multiplication \n 4.Division\n 5. Exponenet\n 6. Modulo\n")

switch(exp)
{
    case '1': console.log(a+b)
                break;
    case '2': console.log(b-a)
                break;
    case '3': console.log(a*b)
                break
    case '4': console.log(a/b)
                break
    case '5': console.log(a**b)
                break
    case '6':console.log(a%b)
                break
    default : console.log("Enter valid input")
}