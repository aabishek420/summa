
function displayMessage() {
    let outputDiv = document.getElementById("output");
    let outputText = "";
    
    let f = 0;
    for (let a = 1; a <= 1; a++) {
        for (let b = 1; b <= a; b++) {
            if (a % b === 0) {
                f++;
            }
        }
        if (f === 2) {
            outputText += a + " is a Prime<br>"; 
        }
        f = 0; // Reset for the next number
    }
    outputDiv.innerHTML = outputText;
}
