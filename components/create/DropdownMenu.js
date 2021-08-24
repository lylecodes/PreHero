import { useState, useRef, useEffect } from "react";
import DropdownItem from "./DropdownItem";
import { CSSTransition } from "react-transition-group";
import classes from "./DropdownMenu.module.css";

const DropdownMenu = () => {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function setActiveMenuHandler(currentMenu) {
    setActiveMenu(currentMenu);
  }

  return (
    <div
      className={classes.dropdown}
      style={{ height: menuHeight + 30 }}
      ref={dropdownRef}
    >
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        // menu-primary
        classNames={{
          enter: classes.menuPrimaryEnter,
          enterActive: classes.menuPrimaryEnterActive,
          exit: classes.menuPrimaryExit,
          exitActive: classes.menuPrimaryExitActive,
        }}
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className={classes.menu}>
          <DropdownItem>
            <h1>Categories</h1>
          </DropdownItem>
          <DropdownItem
            leftIcon="🦧"
            goToMenu="settings"
            setMenu={setActiveMenuHandler}
          >
            Settings
          </DropdownItem>
          <DropdownItem
            leftIcon="🦧"
            goToMenu="animals"
            setMenu={setActiveMenuHandler}
          >
            Animals
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "settings"}
        timeout={500}
        // menu-secondary
        classNames={{
          enter: classes.menuSecondaryEnter,
          enterActive: classes.menuSecondaryEnterActive,
          exit: classes.menuSecondaryExit,
          exitActive: classes.menuSecondaryExitActive,
        }}
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className={classes.menu}>
          <DropdownItem
            goToMenu="main"
            leftIcon="🦧"
            setMenu={setActiveMenuHandler}
          >
            <h2>Languages</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🦧">HTML</DropdownItem>
          <DropdownItem leftIcon="🦧">CSS</DropdownItem>
          <DropdownItem leftIcon="🦧">JavaScript</DropdownItem>
          <DropdownItem leftIcon="🦧">Awesome!</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "animals"}
        timeout={500}
        classNames={{
          enter: classes.menuSecondaryEnter,
          enterActive: classes.menuSecondaryEnterActive,
          exit: classes.menuSecondaryExit,
          exitActive: classes.menuSecondaryExitActive,
        }}
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className={classes.menu}>
          <DropdownItem
            goToMenu="main"
            leftIcon="🦧"
            setMenu={setActiveMenuHandler}
          >
            <h2>Animals</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
          <DropdownItem leftIcon="🐸">Frog</DropdownItem>
          <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
          <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
};

export default DropdownMenu;
