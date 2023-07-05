import React, { useState, createContext, ReactNode, useEffect } from 'react'

interface ThemeContextType {
  isDarkTheme: boolean;
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}
export const ThemeContext = createContext<ThemeContextType>({
  isDarkTheme: false,
  toggleTheme: () => {},
});

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = (): void => {
    setIsDarkTheme((prevIsDarkTheme) => !prevIsDarkTheme)
  } 
  
  useEffect(() => {
    const storedTheme = sessionStorage.getItem('theme');
    setIsDarkTheme(storedTheme === 'dark' || storedTheme === null);
  }, []);

  useEffect(() => {
    sessionStorage.setItem('theme', isDarkTheme ? 'light' : 'dark');
  }, [isDarkTheme]);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider