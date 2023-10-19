// Business Logic


function getTriangles(e) {
  e.preventDefault();
  window.alert("test")
  let sideA = parseInt(document.getElementById("sideA").value);
  let sideB = parseInt(document.getElementById("sideB").value);
  let sideC = parseInt(document.getElementById("sideC").value);
  calculateTriangles(sideA,sideB,sideC);
}

function calculateTriangles(sideA,sideB,sideC) {  
  if ((sideA + sideB <= sideC) || (sideA + sideC <= sideB) || (sideC + sideB <= sideA)) {
    document.getElementById("resultString").innerText = "That's not a triangle! :( ";
  }
  else if (sideA === sideB && sideA === sideC) { 
  document.getElementById("resultString").innerText = "Equilateral";
} else if ((sideA === sideB) || (sideA === sideC) || (sideB === sideC)) {
  document.getElementById("resultString").innerText = "Isosceles";
} else if ((sideA != sideB) && (sideB != sideC)) {
  document.getElementById("resultString").innerText = "Scalene";
} else {
  document.getElementById("resultString").innerText = "That's not a triangle! :( ";
}
}

window.addEventListener("load", function() {
  document.getElementById("triangleInput").addEventListener("submit", getTriangles)
})
// UI Logic