import { useTheme } from '../context/Themecontext'

import { Sun, Moon, Monitor } from 'lucide-react'

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 p-2 mr-4 ml-2 rounded-full">
      <button
        onClick={() => toggleTheme('light')}
        className={`p-2 rounded-full ${theme === 'light' ? 'bg-[#52a388] text-white' : 'hover:bg-gray-200 dark:hover:bg-gray-700'}`}
        aria-label="Light mode"
      >
        <Sun className="w-5 h-5 dark:text-white" />
      </button>

      <button
        onClick={() => toggleTheme('dark')}
        className={`p-2 rounded-full ${theme === 'dark' ? 'bg-[#52a388] text-white' : 'hover:bg-gray-200 dark:hover:bg-gray-700'}`}
        aria-label="Dark mode"
      >
        <Moon className="w-5 h-5 dark:text-white" />
      </button>


      
    </div>
  );
};