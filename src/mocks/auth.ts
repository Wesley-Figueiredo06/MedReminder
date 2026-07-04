interface MockCredentials {
  email: string;
  password: string;
}

const MOCK_USER: MockCredentials = {
  email: "usuario@teste.com",
  password: "123456",
};

export const mockAuth = {
  hasSession: false,
};

export function validateMockCredentials(email: string, password: string): boolean {
  return email === MOCK_USER.email && password === MOCK_USER.password;
}
