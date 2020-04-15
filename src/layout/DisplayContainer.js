import React, { useContext } from "react";

import { ThemeContext } from "../contexts/ThemeContext";

import useStyles from "../styles/DisplayContainerStyles";

const DisplayContainer = ({ children }) => {
  const theme = useContext(ThemeContext);
  const classes = useStyles({ isDarkMode: theme.isDarkMode });
  return <div className={classes.DisplayContainer}>{children}</div>;
};

export default DisplayContainer;
