const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;

texto.innerHTML = '';
texto.innerHTML += `<p> Raiz Quadrada: ${numero ** 0.5}</p>`;
texto.innerHTML += `<p>${numero} é inteiro? ${number.isInteger(numero)}</p>`;
texto.innerHTML += `<p> É NaN ${Number.isNaN(numero)}</p>`;
//texto.innerHTML += `<p>Seu Número +2 é ${numero + 2}.</p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${(Math.floor(numero))}.</p > `;
texto.innerHTML += `< p > Arredondando para cima ${(Math.ceil(numero))}.</p > `;
texto.innerHTML += `< p > Com duas casas decimais ${numero.toFixed(2)}.</p > `;