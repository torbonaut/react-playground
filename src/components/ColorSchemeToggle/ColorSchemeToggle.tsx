import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import {
  IconMoon,
  IconSquareLetterA,
  IconSun,
} from '@tabler/icons-react';

export function ColorSchemeToggle() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  const toggleColorScheme = () => {
    switch (colorScheme) {
      case 'auto':
        setColorScheme('light');
        break;
      case 'light':
        setColorScheme('dark');
        break;
      case 'dark':
        setColorScheme('auto');
        break;
    }
  };

  return (
    <ActionIcon
      onClick={() => toggleColorScheme()}
      variant="filled"
      size="xl"
      aria-label="change color scheme"
      color="blue"
    >
      {colorScheme === 'auto' ? (
        <IconSun />
      ) : colorScheme === 'light' ? (
        <IconMoon />
      ) : (
        <IconSquareLetterA />
      )}
    </ActionIcon>
  );
}
