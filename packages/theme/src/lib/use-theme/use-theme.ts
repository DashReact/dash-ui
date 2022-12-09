import { useState, useCallback } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UseTheme {
  theme: string;
  changeTheme: (newTheme: string) => void;
  toggleTheme: () => void;
}

export function useTheme(): UseTheme {
  const [theme, setTheme] = useState('light');

  const changeTheme = useCallback((newTheme: string) => {
    const theme = window.localStorage.getItem('theme') ?? 'light';
    window.localStorage.setItem('theme', newTheme);
    document.body.classList.remove(theme);
    document.body.classList.add(newTheme);
    setTheme(theme);
  }, []);

  const toggleTheme = useCallback(() => {
    const theme = window.localStorage.getItem('theme') ?? 'light';
    const newTheme = (theme === 'light' ? 'dark' : 'light');
    window.localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
    document.body.classList.remove(theme);
    document.body.classList.add(newTheme);
  }, []);



  return { theme, changeTheme, toggleTheme };
}

export default useTheme;
