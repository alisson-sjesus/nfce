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
    while ((regexpResult = rege.exec(value)) !== null) {
      output.innerHTML += regexpResult[1] + ',';
    }
  }

  while ((regexpResult = rege.exec(value)) !== null) {
    output.innerHTML += regexpResult[1] + ',';
    output.innerHTML.length = output.innerHTML.length - 1;
  }
});

// GERADOR DE SCRIPT //

const mes = new Date().getMonth();
const ano = new Date().getFullYear();
let mesAtual;

switch (mes) {
  case 0:
    mesAtual = `01.12.${ano - 1} and 31.12.${ano - 1}`;
    break;
  case 1:
    mesAtual = `01.01.${ano - 1} and 31.01.${ano}`;
    break;
  case 2:
    mesAtual = `01.02.${ano - 1} and 28.02.${ano}`;
    break;
  case 3:
    mesAtual = `01.03.${ano - 1} and 31.03.${ano}`;
    break;
  case 4:
    mesAtual = `01.04.${ano - 1} and 30.04.${ano}`;
    break;
  case 5:
    mesAtual = `01.05.${ano - 1} and 31.05.${ano}`;
    break;
  case 6:
    mesAtual = `01.06.${ano - 1} and 30.06.${ano}`;
    break;
  case 7:
    mesAtual = `01.07.${ano - 1} and 31.07.${ano}`;
    break;
  case 8:
    mesAtual = `01.08.${ano - 1} and 31.08.${ano}`;
    break;
  case 9:
    mesAtual = `01.09.${ano - 1} and 30.09.${ano}`;
    break;
  case 10:
    mesAtual = `01.10.${ano - 1} and 31.10.${ano}`;
    break;
  case 11:
    mesAtual = `01.12.${ano - 1} and 31.12.${ano}`;
    break;

  default:
    break;
}

const nfcePendentes = `select idnfmaster, 1 as tratado, subserie, current_timestamp as datahora from nfmaster where protocolo = '' and chavenfe <> '' and situacao = 0 and serie = 'NFC-E' and dataentsai between ${mesAtual}`;

const inutilizarNFCe = `select idnfmaster, 2 as situacao from nfmaster where protocolo = '' and chavenfe = '' and situacao = 0 and serie = 'NFC-E' and dataentsai between ${mesAtual}`;

const exportarNFCe = `select m.* from nfmaster m
--left join nfdet n on m.idnfmaster = n.idnfmaster
--left join vendas v on v.idnfmaster = m.idnfmaster
--left join areceber a on v.idcompra = a.idcompra
where situacao = 0 and dataentsai between ${mesAtual}`;

const selecionar = document.querySelector('#selecionar-script');
const resultadoScript = document.querySelector('.resultado-script');

selecionar.addEventListener('change', () => {
  const opcao = selecionar.value;

  if (opcao === '1') {
    resultadoScript.innerText = nfcePendentes;
  } else if (opcao === '2') {
    resultadoScript.innerText = inutilizarNFCe;
  } else if (opcao === '3') {
    resultadoScript.innerText = exportarNFCe;
  }
  console.log(opcao);
});
