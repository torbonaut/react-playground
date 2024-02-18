import { AppShell, Burger, Flex, Title, Text } from '@mantine/core';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import SideNav from '../SideNav/SideNav';
import { Outlet } from 'react-router-dom';
import { useDisclosure } from '@mantine/hooks';

export const Shell = () => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'md', collapsed: { mobile: !opened } }}
      aside={{ width: 300, breakpoint: 'md', collapsed: { mobile: !opened } }}
    >
      <AppShell.Header>
        <Flex justify="space-between" gap={32} align="center" p={8}>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Title size={24} m={0}>
            React Playground
          </Title>
          <ColorSchemeToggle />
        </Flex>
      </AppShell.Header>
      <AppShell.Navbar>
        <Flex p={32} direction="column">
          <SideNav />
        </Flex>
      </AppShell.Navbar>
      <AppShell.Main>
        <Flex p={32} direction="column">
          <Outlet />
        </Flex>
      </AppShell.Main>
      <AppShell.Aside>
        <Flex p={32} direction="column">
          <Title order={2} size={24}>
            Aside
          </Title>
        </Flex>
      </AppShell.Aside>
      <AppShell.Footer>
        <Flex p={8} justify="center">
          <Text size="xs" c="dimmed">
            &copy; {new Date().getFullYear()} Torben Gallob
          </Text>
        </Flex>
      </AppShell.Footer>
    </AppShell>
  );
};
