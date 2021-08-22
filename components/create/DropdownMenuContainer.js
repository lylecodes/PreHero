import NavItem from './NavItem.js'
import Navbar from './Navbar.js';
import DropdownMenu from './DropdownMenu.js';
import classes from './DropdownMenu.module.css'

const DropdownMenuContainer = () => {
    return (
        <div className={classes.dropdownContainer}>
                <DropdownMenu />
          </div>
    )
}

export default DropdownMenuContainer;