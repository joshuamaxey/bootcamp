import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='link-container'>
      <NavLink className={({isActive}) => isActive ? 'active-nav nav-button' : 'nav-button'} 
               to='/'
      >
        Home
      </NavLink>
      <NavLink className={({isActive}) => isActive ? 'active-nav nav-button' : 'nav-button'} 
               to='titan'
      >
        Titan
      </NavLink>
      <NavLink className={({isActive}) => isActive ? 'active-nav nav-button' : 'nav-button'}
               to='kuiper'
      >
        Kuiper
      </NavLink>
    </div>
  );
};

export default Navbar;
