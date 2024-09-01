
import './App.css'
import { ModeToggle } from './components/mode-toggle';
import Login from './pages/Login'
import { ThemeProvider } from "@/components/theme-provider"


function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className='grid justify-items-end'>
      <ModeToggle/>
      </div>
      <div className='justify-center grid-cols-1'>
          <div className='flex items-center justify-center mt-64'>
           <Login/>
          </div>
    </div>
    </ThemeProvider>
  );
}

export default App
