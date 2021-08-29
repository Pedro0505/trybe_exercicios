const longestWord = word => {
  let wordArray = word.split(' ');
  let maxLength = 0;
  let result;

  for (let i = 0; i < wordArray.length; i += 1) {
    if (wordArray[i].length > maxLength) {
      maxLength = wordArray[i].length;
        result = wordArray[i];
    }
  }
  return result;
}

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));
