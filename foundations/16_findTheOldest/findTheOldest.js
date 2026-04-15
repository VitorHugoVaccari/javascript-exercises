const getAge = function (aniversario, morte) {
  if (!morte) {
    morte = new Date().getFullYear();
  }
  return morte - aniversario;
};

const findTheOldest = function (people) {
  return people.reduce((maisVelho, pessoaAtual) => {
    const idadeMaisVelha = getAge(maisVelho.yearOfBirth, maisVelho.yearOfDeath);
    const idadeAtual = getAge(pessoaAtual.yearOfBirth, pessoaAtual.yearOfDeath);
    return idadeMaisVelha < idadeAtual ? pessoaAtual : maisVelho;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
