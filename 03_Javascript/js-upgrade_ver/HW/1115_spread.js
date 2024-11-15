const word1="abc";
const word2="xyz";

// spread를 사용할 때
const words = [...word1,...word2];
console.log(words)

//split을 사용할 때
const words2= (word1+word2).split('');
console.log(words2)