import { NavLink } from '@mantine/core';
import { IconDownload, IconHome } from '@tabler/icons-react';
import { Link, useMatch } from 'react-router-dom';

function MyNavLink({ to, label, icon }: { to: string; label: string; icon: React.ReactNode }) {
  const match = useMatch(to);
  return <NavLink component={Link} to={to} label={label} active={!!match} leftSection={icon} />;
}

const SideNav = () => {
  return (
    <>
      <MyNavLink to="/" label="Home" icon={<IconHome />} />
      <MyNavLink to="/file-upload-cloudinary" label="Cloudinary Upload" icon={<IconDownload />} />
    </>
  );
};

export default SideNav;
