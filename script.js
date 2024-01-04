function toCase(inputString) {
    if (!inputString) {
        return '-';
    }

    const lowercase = inputString.toLowerCase();
    const uppercase = inputString.toUpperCase();

    return `${lowercase}-${uppercase}`;
}

// Examples
console.log(toCase('Mthatha')); // Output: 'mthatha-MTHATHA'
console.log(toCase('HelloWorld')); // Output: 'helloworld-HELLOWORLD'
console.log(toCase('OpenAI')); // Output: 'openai-OPENAI'
console.log(toCase('')); // Output: '-'

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
