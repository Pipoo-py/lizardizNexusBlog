import { atom } from 'nanostores';

export const theme = atom('light');

export function setTheme(newTheme) {
  theme.set(newTheme); 
  if (typeof window !== 'undefined') {
    localStorage.setItem('theme', newTheme);
    document.body.classList.toggle('dark', newTheme === 'dark');
  }
}

export function toggleTheme() {
  const newTheme = theme.get() === 'light' ? 'dark' : 'light';
  setTheme(newTheme); 
}
