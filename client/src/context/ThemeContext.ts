'use client';
import { createContext } from 'react';
import { Theme } from '@/types';

interface IThemeContext {
  theme: Theme;
  toggleTheme?: () => void;
}

const defaultValue = {
  theme: Theme.light,
};

export const ThemeContext = createContext<IThemeContext>(defaultValue);
