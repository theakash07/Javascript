let name="Hello! how are you"
console.log(name)

let surf=`Hello ${name}`
console.log(surf)

surf="The quick brown fox jump over the lazy dog"

for(let a=0;a<=surf.length;a++)
{
    console.log(surf[a])
}

console.log(surf.startsWith("The"))
console.log(surf.endsWith("Dog"))
