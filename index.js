function generatePassword(length, options) {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specialCharacters = '!@#$%^&*()_+[]{}|;:,.<>?';
    
    let characters = '';
    if (options.includeLowercase) characters += lowercase;
    if (options.includeUppercase) characters += uppercase;
    if (options.includeNumbers) characters += numbers;
    if (options.includeSpecial) characters += specialCharacters;

    if (characters.length === 0) {
        throw new Error('At least one character type must be selected.');
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random(), characters.length);
        password += characters[randomIndex];
    }

    return password;
}

module.exports = { generatePassword };

