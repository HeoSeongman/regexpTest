console.log(123);

const str = 'Hello\nWorld';
const regexpSTR = `
010-7140-5379
theaks0804@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:5050/
동해물과 백두산이 마르고 닳도록
`;
console.log(str);

// const regexp = new RegExp('the', 'gi');
// const regexp = /the/gi
// console.log(regexpSTR.replace(regexp, 'dog'));
// console.log(regexpSTR.match(/./g));
// console.log(regexpSTR.match(/https?/g));
console.log(regexpSTR.match(/\w/g));
console.log(regexpSTR.match(/\b/g));
console.log(regexpSTR.match(/\bf\w{1,}\b/g));
/*
\b - 63개 문자가 아닌 문자 경계에서
f  - f로 시작하는
\w{1,} - 63개 문자가 1개 이상 연속적이고
\b - 63개 문자가 아닌 문자 경계에서
끝나는 문자


*/