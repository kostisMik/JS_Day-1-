// // Total Sales: F = E * C
// // Total Profit: G = E * D
// console.log("Running..");
// // alert();


//change Content:
// unitCol.textContent = "xxx"; // etsi tha allaxei kai to td me ypologismo


//SYNTAX OF ADDEVENTLISTENER IN PSEUDOCODE
// HTMLElement.addEventListener(event: String, callback: FUNCTION);

let unitCol = document.querySelector("#units");
let profitsCol = document.querySelector("#profits");
profitsCol.style.backgroundColor = "yellowgreen";
profitsCol.style.border = "1px solid black";

// //change Style:
unitCol.style.backgroundColor = "yellowgreen";
unitCol.style.border = "2px solid black";

unitCol.addEventListener("input", handleClick);
console.log(unitCol);

/* Under the hood:

//function addEventListener(event, callback){
//     listen for event
//     when event gets triggered
//     callback(eventToObject);
// }

*/

function handleClick(e){ 
    let unitsProjected = e.target;
    let G = unitsProjected.nextElementSibling.nextElementSibling;
    let D = unitsProjected.previousElementSibling;

    let valE = unitsProjected.textContent;
    let valD = D.textContent;
    valE = parseFloat(valE);
    valD = parseInt(valD);
    console.log(typeof valE, typeof valD);
    console.log("G =", valE * valD);
    G.textContent = valE * valD;
}

//  run();

// try{
//     run();
// }catch(error){
//      console.log(error, error.message);
// }

//END OF CODE 