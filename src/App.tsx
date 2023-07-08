import { useContext, useState } from 'react'

import { Header } from "./components"
import { ThemeContext } from "./context/ThemeProvider";
import Sidebar from './components/sidebar/Sidebar';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const { isDarkTheme } = useContext(ThemeContext);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div data-theme={ isDarkTheme === true ? 'dark' : 'light' } className="body">
      {/* HEADER */}
      <Header onToggleSidebar={handleToggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} onCloseSidebar={handleCloseSidebar}/>
    </div>
  )
} 

export default App