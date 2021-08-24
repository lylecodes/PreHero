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
            Stimulants
          </DropdownItem>
          <DropdownItem
            leftIcon="🦧"
            goToMenu="animals"
            setMenu={setActiveMenuHandler}
          >
            Pump
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
            <h2>Stimulants</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🦧">Caffeine</DropdownItem>
          <DropdownItem leftIcon="🦧">Caffeine</DropdownItem>
          <DropdownItem leftIcon="🦧">Caffeine</DropdownItem>
          <DropdownItem leftIcon="🦧">Caffeine!</DropdownItem>
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
            <h2>Pump</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🦘">Creatine Nitrate</DropdownItem>
          <DropdownItem leftIcon="🐸">Creatine Nitrate</DropdownItem>
          <DropdownItem leftIcon="🦋">Creatine Nitrate</DropdownItem>
          <DropdownItem leftIcon="🦔">Creatine Nitrate</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
};

export default DropdownMenu;
