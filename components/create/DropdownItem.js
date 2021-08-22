import classes from './DropdownMenu.module.css'

function DropdownItem(props) {
    return (
        <li>
      <a href="#" className={classes.menuItem} onClick={() => props.goToMenu && props.setMenu(props.goToMenu)}>
        <span className={classes.iconButton}>{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a></li>
    );
  }

export default DropdownItem;