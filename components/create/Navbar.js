import classes from './DropdownMenu.module.css'

function Navbar(props) {
    return (
      <nav className={classes.navbar}>
        <ul className={classes.navbarNav}>{props.children}</ul>
      </nav>
    );
  }

  export default Navbar;