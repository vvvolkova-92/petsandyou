import { FC, ReactNode, useState } from 'react';
import { Theme } from '@/types';
import { ThemeContext } from '@/context/ThemeContext';

interface IThemeProvider {
  children: ReactNode;
}
export const ThemeProvider: FC<IThemeProvider> = ({ children }) => {
  const [theme, setTheme] = useState(Theme.light);
  const toggleTheme = () => {
    setTheme((prev) => (prev === Theme.dark ? Theme.light : Theme.dark));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`theme ${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
