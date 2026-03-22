const TOKEN_KEY = 'faex_token';

export function setToken(token: string, days = 7): void {
  const expires = new Date();
  expires.setDate(expires.getDate() + days);
  document.cookie = `${TOKEN_KEY}=${token}; expires=${expires.toUTCString()}; path=/; SameSite=Strict`;
}

export function getToken(): string | null {
  const match = document.cookie
    .split('; ')
    .find(row => row.startsWith(`${TOKEN_KEY}=`));
  return match ? match.split('=')[1] : null;
}

export function removeToken(): void {
  document.cookie = `${TOKEN_KEY}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}
