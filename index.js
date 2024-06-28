/*
    GLORY BE TO GOD,
    Introduction to Function Parameters,
    By Israel Mafabi Emmanuel
*/

function introduction(name) {
    return `Hi, my name is ${name}.`;
}

function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

function introductionWithLanguageOptional(name, language = "JavaScript") {
    return  `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

introductionWithLanguageOptional("Gracie", "Python");