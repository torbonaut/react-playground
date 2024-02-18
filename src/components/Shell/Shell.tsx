import { AppShell, Burger, Flex, Title } from '@mantine/core';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import SideNav from '../SideNav/SideNav';
import { Outlet, Router } from 'react-router-dom';
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
        <Flex justify="space-between" gap={32} p={8} align="center">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Title size={24} m={0}>
            React Playground
          </Title>
          <ColorSchemeToggle />
        </Flex>
      </AppShell.Header>
      <AppShell.Navbar p={32}>
        <SideNav />
      </AppShell.Navbar>
      <AppShell.Main p={32}>
        <Outlet />
      </AppShell.Main>
      <AppShell.Aside>Aside</AppShell.Aside>
      <AppShell.Footer>Footer</AppShell.Footer>
    </AppShell>
  );
};
