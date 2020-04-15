import React, { useContext } from "react";
import useToggleState from "../hooks/useToggleState";
import useInputState from "../hooks/useInputState";

import { ThemeContext } from "../contexts/ThemeContext";
import { LanguageContext } from "../contexts/languageContext";

import useStyles from "../styles/HeaderStyles";

const words = {
  EN: {
    search: "Search",
    darkMode: "Dark Mode",
  },
  LK: {
    search: "සොයන්න",
    darkMode: "අඳුරු තේමාව",
  },
  FR: {
    search: "Chercher",
    darkMode: "Mode sombre",
  },
};

const Header = ({ languageContext }) => {
  // Initiate the contexts to consume
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
  const { selectedItem, languageList, selectLanguageList } = useContext(
    LanguageContext
  );

  const classes = useStyles({ isDarkMode: isDarkMode });

  // State
  const [lanMenuOpened, toggleLanMenu] = useToggleState(false);
  const [searchText, handleSearchTextChange, resetSearchText] = useInputState(
    ""
  );

  const handleListItemClick = (event) => {
    const el = event.target.closest("p");
    if (el) {
      selectLanguageList(el.dataset.id);

      //close the menu;
      toggleLanMenu();
    }
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    alert(searchText);
    resetSearchText();
  };

  return (
    <div className={classes.Header}>
      <div className={classes.Header_Content}>
        <div className={classes.Header_dropdown}>
          <div className={classes.DropDown_btn} onClick={toggleLanMenu}>
            {languageList.map(
              (option) =>
                option.isSelected && (
                  <>
                    <span
                      role="img"
                      aria-label="emoji"
                      className={classes.Header_emoji}
                    >
                      {option.flag}
                    </span>{" "}
                    {`${option.name} - ${option.id}`}
                  </>
                )
            )}
          </div>
          <div
            className={`${classes.Dropdown_list} ${
              lanMenuOpened && classes.show_menu
            }`}
            onClick={handleListItemClick}
          >
            {languageList.map((option) => (
              <p data-id={option.id} className={classes.Dropdown_list_option}>
                <span
                  role="img"
                  aria-label="emoji"
                  className={classes.Header_emoji}
                >
                  {option.flag}
                </span>{" "}
                {`${option.name} - ${option.id}`}
              </p>
            ))}
          </div>
        </div>
        <div className={classes.themeCheckBox_label}>
          <p className={classes.themeText}>{words[selectedItem.id].darkMode}</p>
          <input
            type="checkbox"
            id="themeCheckBox"
            name="themeCheckBox"
            checked={isDarkMode}
            onChange={toggleDarkMode}
            className={classes.themeCheckBox}
          />

          {/* <p className={classes.themeText}>Dark</p> */}
          <label htmlFor="themeCheckBox">
            <p className={classes.themeText}></p>
            <div className={classes.Switch}>
              <div className={classes.switchHeader}></div>
            </div>
          </label>
        </div>
      </div>
      <form onSubmit={handleSearchSubmit}>
        <input
          value={searchText}
          onChange={handleSearchTextChange}
          type="text"
          placeholder={words[selectedItem.id].search}
          className={classes.Header_searchBar}
        />
      </form>
    </div>
  );
};

export default Header;
