const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

console.log(student1.Html)

const skills = (students) => {
  const key = Object.keys(students)
  const value = Object.values(students)
  let runKey;
  let runValue;
  for (let i = 0; i < key.length; i += 1) {
    runKey = key[i];
    runValue = value[i]
    console.log (`Minhas habilidades ${runKey} Nivel: ${runValue}`)
  }
}

skills(student2)
