var div=document.createElement("div");
var input=document.createElement("input");
input.setAttribute("type","text");

input.setAttribute("id","number");


var button=document.createElement("button");
button.setAttribute("type","button");
button.innerHTML="Search";
button.addEventListener("click",foo);


let species=document.createElement("div");
species.setAttribute("id","species");

let weight=document.createElement("div");
weight.setAttribute("id","weight");

let abilities=document.createElement("div");
abilities.setAttribute("id","abilities");

let moves=document.createElement("div");
moves.setAttribute("id","moves");






div.append(input,button,species,weight,abilities,moves);
div.class="result";
document.body.append(div);


async function foo(){
    try{
 let res=document.getElementById("number").value;
    var url=`https://pokeapi.co/api/v2/pokemon/${res}/`;
    let result=await fetch(url);
    let result1=await result.json();

    



 console.log(result1) ;
 console.log(result1.species.name);
 console.log(result1.weight);
 console.log(result1.abilities[0].ability.name);
 console.log(result1.moves[0].move.name);
 

 
 species.innerHTML=`Name :${result1.species.name}`;
 weight.innerHTML=`Weight :${result1.weight}`;
 abilities.innerHTML=`Ability :${result1.abilities[0].ability.name}`;
 moves.innerHTML=`Moves :${result1.moves[0].move.name}`;
    }
    catch(error){
        result1.innerHTML=error;
    }

 
 




}


