// Business Logic
window.addEventListener("load", function() {
  document.getElementById("triangleInput").addEventListener("submit", getTriangles);
});

function getTriangles(e) {
  e.preventDefault();
  let sideA = parseInt(document.getElementById("sideA").value);
  let sideB = parseInt(document.getElementById("sideB").value);
  let sideC = parseInt(document.getElementById("sideC").value);
  calculateTriangles(sideA,sideB,sideC);
}

function calculateTriangles(sideA,sideB,sideC) {  
if (sideA === sideB === sideC) { 
  document.getElementById("resultString").innerText = "Equilateral";
} else if ((sideA === sideB) || (sideA === sideC) || (sideB === sideC)) {
  document.getElementById("resultString").innerText = "Isosceles";
} else if ((sideA != sideB) && (sideB != sideC)) {
  document.getElementById("resultString").innerText = "Scalene";
} else {
  document.getElementById("resultString").innerText = "That's not a triangle! :( ";
}
}

// UI Logic