import { weight, height, calculateIMC, resultIMC, getSituation } from './imc';

const w = weight();
const h = height();

const imc = calculateIMC(w, h);
const situation = getSituation(imc);

const result = resultIMC(imc, situation);

console.log(result);
