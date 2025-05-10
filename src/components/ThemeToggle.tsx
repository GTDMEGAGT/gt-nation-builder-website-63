
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/providers/ThemeProvider';
import { Toggle } from '@/components/ui/toggle';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Toggle 
      variant="outline" 
      pressed={theme === 'light'} 
      onPressedChange={toggleTheme}
      className="border-0"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Toggle>
  );
}
