export const generateMockCPF = () => {
  let cpf = "";
  for (let i = 0; i < 9; i++) {
    cpf += Math.floor(Math.random() * 10);
  }

  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cpf.charAt(i)) * (10 - i);
  }

  let remainder = sum % 11;
  let digit1 = remainder < 2 ? 0 : 11 - remainder;

  cpf += digit1;

  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cpf.charAt(i)) * (11 - i);
  }

  remainder = sum % 11;
  let digit2 = remainder < 2 ? 0 : 11 - remainder;

  cpf += digit2;

  return cpf;
};
