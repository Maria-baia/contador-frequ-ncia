const button = document.getElementById("countButton");
button.addEventListener("click", function() {  
   // teu código vai aqui ... 
   let typedText = document.getElementById("textInput").value;
   typedText = typedText.toLowerCase();
   typedText = typedText.replace(/[^a-z'\s]+/g, "");
   const letterCounts = {};
   for (let i = 0; i < typedText.length; i++) {
        currentLetter = typedText[i];
        // faça algo com cada letra 
        if (letterCounts[currentLetter] === undefined) {
            letterCounts[currentLetter] = 1; 
        } else { 
            letterCounts[currentLetter]++; 
        }
    }
    for (let letter in letterCounts) { 
        const span = document.createElement("span"); 
        const textContent = `"${letter}": ${letterCounts[letter]}, `;
        span.innerText = textContent; 
        const letters = document.getElementById("lettersDiv");
        letters.appendChild(span); 
    }
    words = typedText.split(/\s/);
    const wordsCounts = {};
    for (let i = 0; i < words.length; i++) {
        currentWords = words[i];
        // faça algo com cada letra 
        if (wordsCounts[currentWords] === undefined) {
            wordsCounts[currentWords] = 1; 
        } else { 
            wordsCounts[currentWords]++; 
        }
    }
    for (let word in wordsCounts) { 
        const span = document.createElement("span"); 
        const textContent = `"${word}": ${wordsCounts[word]}, `;
        span.innerText = textContent; 
        const words = document.getElementById("wordsDiv");
        words.appendChild(span); 
    }
});
const clearBox = document.getElementById("clearBox");
clearBox.addEventListener("click", function() {
    document.getElementById("lettersDiv").innerHTML = ""
    document.getElementById("wordsDiv").innerHTML = ""
})
