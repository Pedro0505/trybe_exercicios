const fs = require('fs').promises;

async function arrayToFile() {
  const strings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!']

  const createFilePromises = strings.map((string, index) =>
    fs.writeFile(`./file${index + 1}.txt`, string)
  );

  await Promise.all(createFilePromises);
  
}

arrayToFile()