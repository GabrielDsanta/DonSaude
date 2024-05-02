export interface SignUpVariables {
  name: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface User {
  id: string;
  name: string;
	cpf: string;
	email: string;
}