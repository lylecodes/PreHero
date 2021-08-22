import NavItem from './NavItem.js'
import Navbar from './Navbar.js';
import DropdownMenu from './DropdownMenu.js';

const DropdownMenuContainer = () => {
    return (
        <div>
            <Navbar>
                
            <NavItem>
                <DropdownMenu />
            </NavItem>
            </Navbar>
          </div>
    )
}

export default DropdownMenuContainer;