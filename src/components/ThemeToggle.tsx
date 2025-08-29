import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

const ThemeToggle = ({ darkMode, setDarkMode }: ThemeToggleProps) => {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed top-4 right-4 z-[70] p-3 rounded-full bg-white dark:bg-dark-800 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-500 border border-gray-200 dark:border-dark-700 hover:bg-gray-50 dark:hover:bg-dark-700"
      aria-label="Toggle theme"
    >
      {darkMode ? (
        <Sun className="w-5 h-5 text-yellow-500 animate-pulse" />
      ) : (
        <Moon className="w-5 h-5 text-blue-600 animate-pulse" />
      )}
    </button>
  );
};

export default ThemeToggle;
