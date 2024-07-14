
function removeDuplicates(input) {
    let charMap = {};
    let result = '';

    
    for (let char of input) {
       
        if (!charMap[char]) {
           
            result += char;
            charMap[char] = true;
        }
    }

    return result;
}


document.getElementById('duplicateForm').addEventListener('submit', function(event) {
   
    event.preventDefault();

    
    let input = document.getElementById('inputString').value;

    
    let result = removeDuplicates(input);

    
    document.getElementById('output').innerHTML = `<p>Original string: ${input}</p><p>String without duplicates: ${result}</p>`;
});

