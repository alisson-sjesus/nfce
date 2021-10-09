const txt = document.querySelector('.input-area');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  const rege = /(?:0{2,})(\d+)(\s\d+)/gm;
  const value = txt.value;
  const output = document.querySelector('.output-area');
  let regexpResult;

  if (value === '') {
    output.innerHTML = 'Insira os números das notas';
  } else {
    output.innerHTML = '';
  }

  while ((regexpResult = rege.exec(value)) !== null) {
    output.innerHTML += regexpResult[1] + ',';
  }

  const nfceArray = output.innerHTML.split(',');
  const arrayVirgula = nfceArray.filter((arr) => {
    return arr;
  });
  const newArray = arrayVirgula.join(',');
  output.innerHTML = newArray;
});
