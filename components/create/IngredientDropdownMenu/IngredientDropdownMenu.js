import { useState, useRef, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

import CategoryItemsList from "./CategoryItemsList";
import StrengthIngredientItemsList from "./StrengthIngredientItemsList";
import EnduranceIngredientItemsList from "./EnduranceIngredientItemsList";
import FocusIngredientItemsList from "./FocusIngredientItemsList";
import PumpIngredientItemsList from "./PumpIngredientItemsList";
import classes from "./IngredientDropdownMenu.module.css";

const IngredientDropdownMenu = () => {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  const calcHeight = (el) => {
    const height = el.offsetHeight;
    setMenuHeight(height);
  };

  const setActiveMenuHandler = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <div
      className={classes.dropdown}
      style={{ height: menuHeight + 5 }}
      ref={dropdownRef}
    >
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        onEnter={calcHeight}
        classNames={{
          enter: classes.menuPrimaryEnter,
          enterActive: classes.menuPrimaryEnterActive,
          exit: classes.menuPrimaryExit,
          exitActive: classes.menuPrimaryExitActive,
        }}
        unmountOnExit
      >
        <CategoryItemsList
          className={classes.menu}
          setMenu={setActiveMenuHandler}
        />
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "strength"}
        timeout={500}
        onEnter={calcHeight}
        classNames={{
          enter: classes.menuStrengthEnter,
          enterActive: classes.menuStrengthEnterActive,
          exit: classes.menuStrengthExit,
          exitActive: classes.menuStrengthExitActive,
        }}
        unmountOnExit
      >
        <StrengthIngredientItemsList
          classname={classes.menu}
          setMenu={setActiveMenuHandler}
        />
      </CSSTransition>
      <CSSTransition
        in={activeMenu === "endurance"}
        timeout={500}
        onEnter={calcHeight}
        classNames={{
          enter: classes.menuEnduranceEnter,
          enterActive: classes.menuEnduranceEnterActive,
          exit: classes.menuEnduranceExit,
          exitActive: classes.menuEnduranceExitActive,
        }}
        unmountOnExit
      >
        <EnduranceIngredientItemsList
          className={classes.menu}
          setMenu={setActiveMenuHandler}
        />
      </CSSTransition>
      <CSSTransition
        in={activeMenu === "focus"}
        timeout={500}
        onEnter={calcHeight}
        classNames={{
          enter: classes.menuFocusEnter,
          enterActive: classes.menuFocusEnterActive,
          exit: classes.menuFocusExit,
          exitActive: classes.menuFocusExitActive,
        }}
        unmountOnExit
      >
        <FocusIngredientItemsList
          className={classes.menu}
          setMenu={setActiveMenuHandler}
        />
      </CSSTransition>
      <CSSTransition
        in={activeMenu === "pump"}
        timeout={500}
        onEnter={calcHeight}
        classNames={{
          enter: classes.menuPumpEnter,
          enterActive: classes.menuPumpEnterActive,
          exit: classes.menuPumpExit,
          exitActive: classes.menuPumpExitActive,
        }}
        unmountOnExit
      >
        <PumpIngredientItemsList
          className={classes.menu}
          setMenu={setActiveMenuHandler}
        />
      </CSSTransition>
    </div>
  );
};

export default IngredientDropdownMenu;
