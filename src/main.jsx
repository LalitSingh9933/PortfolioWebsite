import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { ThemeProvider } from './context/Themecontext.jsx'

createRoot(document.getElementById('root')).render(
 
    <HashRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </HashRouter>
  
)
