  import { useState } from 'react';
import classes from './DropdownMenu.module.css'


  function NavItem(props) {
    const [open, setOpen] = useState(false);
  
    return (
      <li className={classes.navItem}>
        <a href="#" className={classes.iconButton} onClick={() => setOpen(!open)}>
          {props.children}
        </a>
  
        {open && props.children}
      </li>
    );
  }

  export default NavItem