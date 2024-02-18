import { NavLink } from 'react-router-dom';

const SideNav = () => {
  return (
    <>
      <NavLink to="/home">
        <span>Home</span>
      </NavLink>
      <NavLink to="/file-upload-cloudinary">
        <span>Cloudinary Upload</span>
      </NavLink>
    </>
  );
};

export default SideNav;
