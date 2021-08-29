let cont = 0;
const accessBody = document.querySelector('body');
const createDiv = document.createElement('div');
createDiv.innerText = cont;
accessBody.appendChild(createDiv);
const createButton = document.createElement('button');
createButton.innerText = 'Clique aqui!';
accessBody.appendChild(createButton);

const countClick = () => {
  cont+=1;
  createDiv.innerText = cont;
}

createButton.addEventListener('click', countClick);
