import readline from 'readline-sync';

const scripts = [
  { name: 'Speed', path: './speed' },
  { name: 'IMC', path: './imc' },
  { name: 'Prize', path: './prize' },
];

const scriptsMessage = scripts
  .map(({ name }, index) => `${index + 1} - ${name}`)
  .join('\n');

const askMessage = 'Digite o número do script desejado:';

const questionMessage = [askMessage, scriptsMessage, ''].join('\n');

const questionScript = readline.questionInt(questionMessage);

const scriptPosition = questionScript - 1;

require(scripts[scriptPosition].path);
