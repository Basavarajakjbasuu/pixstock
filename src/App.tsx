import { useContext } from 'react'

import { Header } from "./components"
import { ThemeContext } from "./context/ThemeProvider";

const App = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <div data-theme={ isDarkTheme === true ? 'dark' : 'light' } className="body">
      {/* HEADER */}
      <Header />
    </div>
  )
}

export default App