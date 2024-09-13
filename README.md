# Библиотека для генерации паролей

// Пример использования
const options = {
    includeLowercase: true,
    includeUppercase: true,
    includeNumbers: true,
    includeSpecial: true
};

const password = generatePassword(12, options);
console.log('Сгенерированный пароль:', password);