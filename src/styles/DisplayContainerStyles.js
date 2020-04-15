import { createUseStyles } from "react-jss";

export default createUseStyles({
  DisplayContainer: {
    width: "100%",
    height: "90%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: (props) =>
      props.isDarkMode ? "rgba(46,66,87,0.8)" : "rgba(181,187,191,0.5)",
    transition: "background-color 0.2s ease-out",
  },
});
