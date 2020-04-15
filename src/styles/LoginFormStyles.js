import { createUseStyles } from "react-jss";

export default createUseStyles({
  LoginForm: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "5rem 4rem",
    backgroundColor: "white",
    borderRadius: 5,
    boxShadow: "0px 0px 4px 0px rgba(0,0,0,0.2)",
    width: "45rem",

    "@media only screen and (max-width: 25em)": {
      width: "100%",
      height: "100%",
    },
  },

  form_avatar: {
    filter:
      "invert(39%) sepia(100%) saturate(1586%) hue-rotate(322deg) brightness(90%) contrast(99%)",
    width: "10rem",
    height: "10rem",
    marginBottom: "2rem",
  },

  form_title: {
    fontSize: "4rem",
    fontWeight: 700,
  },
  LoginForm_form: {
    marginTop: "5rem",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  form_Group: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "1rem",
  },

  formInputField: {
    fontSize: "1.5rem",
    padding: "0.5rem 1rem",
    border: "none",
    borderRadius: 2,
    borderBottom: "2px solid #1F1300",
    outline: "none",
    transition: "border-bottom 0.2s ease-out",

    "&:focus": {
      borderBottom: "2px solid green",
    },

    "&:not(:placeholder-shown):invalid": {
      borderBottom: "2px solid red",
    },

    "&:focus:invalid": {
      borderBottom: "2px solid red",
    },
    "&:placeholder-shown + $formInputLabel": {
      transform: "translateY(-3rem)",
      opacity: 0,
      visibility: "hidden",
    },
  },

  formInputLabel: {
    fontSize: "1.2rem",
    fontWeight: 500,
    visibility: "visible",
    opacity: 1,
    transform: "translateY(0)",
    padding: "0.5rem 1rem",
    transition: "all 0.2s ease-out",
  },

  formSubmitBtn: {
    fontSize: "1.5rem",
    padding: "1rem 2rem",
    outline: "none",
    cursor: "pointer",
    color: "white",
    backgroundColor: "#1F1300",
    border: "2px solid #1F1300",
    marginTop: "1rem",
    borderRadius: "3px",

    transition: "all 0.2s ease-in-out",

    "&:hover": {
      backgroundColor: "transparent",
      color: "#1F1300",
    },
  },
});
