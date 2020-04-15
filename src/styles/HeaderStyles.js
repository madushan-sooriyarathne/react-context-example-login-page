import { createUseStyles } from "react-jss";

export default createUseStyles({
  Header: {
    minHeight: "10%",
    width: "100%",
    padding: "2rem 4rem ",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: (props) => (props.isDarkMode ? "#1F1300" : "#b5bbbf"),

    "@media only screen and (max-width: 31.25em)": {
      display: "grid",
      gridTemplateColumns: "1fr",
      gridTemplateRows: "repeat(2, min-content)",
      gap: "2rem",
    },
  },
  Header_Content: {
    display: "flex",
    alignItems: "center",

    "@media only screen and (max-width: 31.25em)": {
      justifyContent: "space-between",
    },
  },

  Header_dropdown: {
    marginRight: "2rem",
    position: "relative",
  },

  DropDown_btn: {
    color: "white",
    minWidth: "15rem",
    fontSize: "1.4rem",
    fontWeight: 500,
    textTransform: "uppercase",
    display: "flex",
    alignItems: "center",
    padding: "0.5rem 1rem",
    border: "2px solid white",
    borderRadius: 5,
    cursor: "pointer",
  },

  Dropdown_list: {
    position: "absolute",
    top: "110%",
    left: 0,
    backgroundColor: "white",
    borderRadius: 4,
    boxShadow: "0px 0px 4px 0px rgba(0,0,0,0.2)",
    display: "none",

    "& > *:not(:last-child)": {
      borderBottom: "1px solid gray",
    },
  },

  show_menu: {
    display: "block",
  },

  Dropdown_list_option: {
    fontSize: "1.4rem",
    fontWeight: 400,
    textTransform: "uppercase",
    padding: "0.5rem 1rem",
    cursor: "pointer",
  },
  Header_emoji: {
    fontSize: "2rem",
    marginRight: "1rem",
  },

  themeCheckBox_label: {
    display: "flex",
    alignItems: "center",
  },

  themeText: {
    fontSize: "1.4rem",
    fontWeight: 500,
    color: "white",
    marginRight: "1rem",
  },
  themeCheckBox: {
    display: "none",

    "&:checked + label $switchHeader": {
      left: "50%",
    },
  },

  Switch: {
    width: "4rem",
    height: "2rem",
    backgroundColor: "#aab6bb",
    borderRadius: "50rem",
    position: "relative",
    marginRight: "1rem",
    border: "2px solid white",
  },

  switchHeader: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "50%",
    height: "100%",
    backgroundColor: "#F7B05B",
    borderRadius: "50rem",
    transform: "scale(1.4)",
    transition: "left 0.2s ease-in-out",
  },
  Header_searchBar: {
    fontSize: "1.5rem",
    padding: "0.5rem 1rem",
    border: "none",
    borderBottom: "2px solid gray",
    outline: "none",
    backgroundColor: "transparent",
    color: "white",

    "@media only screen and (max-width: 31.25em)": {
      width: "100%",
      fontSize: "2rem",
    },
  },
});
