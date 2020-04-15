import React from "react";

import DisplayContainer from "./DisplayContainer";
import LoginForm from "../components/LoginForm";
import Header from "../components/Header";

import { ThemeProvider } from "../contexts/ThemeContext";
import { LanguageProvider } from "../contexts/languageContext";

import useStyles from "../styles/LoginStyles";

const Login = () => {
  const classes = useStyles();
  return (
    <div className={classes.Login}>
      <ThemeProvider>
        <LanguageProvider>
          <Header />
          <DisplayContainer>
            <LoginForm />
          </DisplayContainer>
        </LanguageProvider>
      </ThemeProvider>
    </div>
  );
};

export default Login;
