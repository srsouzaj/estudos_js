class ValidaCPF {
  constructor(CPFEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
      writable: false,
      enumerable: true,
      configurable: false,
      value: CPFEnviado.replace(/\D+/g, '')
    });
  }

  sequencia() {
    return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
  }

  geraNovoCPF() {
    const cpfSemDig = this.cpfLimpo.slice(0, -2);
    const dig = ValidaCPF.geraDigito(cpfSemDig);
    const dig2 = ValidaCPF.geraDigito(cpfSemDig + dig);
    this.NovoCPF = cpfSemDig + dig + dig2;
  }

  static geraDigito(cpfSemDig) {
    let total = 0;
    let reverso = cpfSemDig.length + 1;

    for (let StringNum of cpfSemDig) {
      total += reverso * Number(StringNum);
      reverso--;
    }
    const dig = 11 - (total % 11);
    return digito <= 9 ? String(digito) : 0;
  }

  valida() {
    if (!this.cpfLimpo) return false;
    if (typeof this.cpfLimpo !== 'string') return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.sequencia()) return false;
    geraNovoCPF();
    this.NovoCPF === this.cpfLimpo;

    return 'CHEGUEI AQUI';
  }
}

const validaCPF = new ValidaCPF('070.987.720-03');
if (validaCPF.valida()) {
  console.log('CPF Válido')
}
else {
  console.log('CPF inválido')
}