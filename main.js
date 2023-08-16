const weightInput = document.getElementById("weight");
const resultsTable = document.querySelector(".results table");

const planetWeights = {
    "The Sun": 27.01,
    "Mercury": 0.38,
    "Venus": 0.91,
    "The Earth": 1,
    "The Moon": 0.166,
    "Mars": 0.38,
    "Jupiter": 2.34,
    "Saturn": 1.06,
    "Uranus": 0.92,
    "Neptune": 1.19,
    "Pluto": 0.06
};

// Generate rows for each planet
for (const planet in planetWeights) {
    const newRow = resultsTable.insertRow();
    
    const planetCell = newRow.insertCell();
    planetCell.textContent = planet;

    const weightCell = newRow.insertCell();
    weightCell.textContent = (weightInput.value * planetWeights[planet]).toFixed(2);

    const calculateCell = newRow.insertCell();
    const calculateButton = document.createElement("button");
    calculateButton.textContent = "Calculate";
    calculateButton.addEventListener("click", function() {
        weightCell.textContent = (weightInput.value * planetWeights[planet]).toFixed(2);
    });
    calculateCell.appendChild(calculateButton);
}






