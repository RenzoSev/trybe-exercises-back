import { weight, height, calculateIMC } from './imc';

const w = weight();
const h = height();

const resultImc = calculateIMC(w, h);

console.log(resultImc);
