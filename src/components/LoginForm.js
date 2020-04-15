import React, { useContext } from "react";
import useStyles from "../styles/LoginFormStyles";
import useInputState from "../hooks/useInputState";

import profileAvatar from "../img/account.svg";
import { LanguageContext } from "../contexts/languageContext";

const words = {
  LK: {
    login: "ඇතුල් වන්න",
    email: "විද්යුත් තැපෑල",
    password: "රහස් පදය",
  },
  EN: {
    login: "Login",
    email: "Email",
    password: "Password",
  },
  FR: {
    login: "S'identifier",
    email: "Email",
    password: "Mot de passe",
  },
};

const LoginForm = () => {
  const { selectedItem } = useContext(LanguageContext);

  const classes = useStyles();

  //State
  const [email, handleEmailChange, resetEmail] = useInputState("");
  const [password, handlePasswordChange, resetPassword] = useInputState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("form Submitted");

    //Form submit login comes here

    //Reset the fields
    resetEmail();
    resetPassword();
  };

  return (
    <div className={classes.LoginForm}>
      <img
        src={profileAvatar}
        className={classes.form_avatar}
        alt="login avatar"
      ></img>
      <h1 className={classes.form_title}>{words[selectedItem.id].login}</h1>
      <form className={classes.LoginForm_form} onSubmit={handleSubmit}>
        <div className={classes.form_Group}>
          <input
            className={classes.formInputField}
            id="emailField"
            type="email"
            placeholder={words[selectedItem.id].email}
            autoComplete="off"
            value={email}
            onChange={handleEmailChange}
            required
          ></input>
          <label htmlFor="emailField" className={classes.formInputLabel}>
            {words[selectedItem.id].email}
          </label>
        </div>
        <div className={classes.form_Group}>
          <input
            className={classes.formInputField}
            id="passwordField"
            type="password"
            placeholder={words[selectedItem.id].password}
            autoComplete="off"
            value={password}
            onChange={handlePasswordChange}
            required
          ></input>
          <label htmlFor="passwordField" className={classes.formInputLabel}>
            {words[selectedItem.id].password}
          </label>
        </div>
        <button type="submit" className={classes.formSubmitBtn}>
          {words[selectedItem.id].login}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
