import { Fragment, useState, useRef } from "react";
import classes from "./index.module.css";

const Testing = () => {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef();

  const popupHandler = (event) => {
    if (!showPopup) {
      const domRect = event.target.getBoundingClientRect();
      console.log(domRect);
      setShowPopup(true);

      setTimeout(() => {
        popupRef.current.style.left = domRect.left - 75 + "px";
        popupRef.current.style.top = domRect.top - 95 + "px";
      }, 50);
    } else {
      setShowPopup(!showPopup);
    }
  };

  return (
    <Fragment>
      <button className={classes.button} onClick={popupHandler}>
        Ingredient
      </button>
      {showPopup && (
        <div className={classes.popup} ref={popupRef}>
          Description here
        </div>
      )}
    </Fragment>
  );
};

export default Testing;
