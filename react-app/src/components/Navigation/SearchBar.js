import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from '../../css-modules/NavBar.module.css'


const SearchBar = () => {
  //hooks
  const [searchTerm, setSearchTerm] = useState("");
  const history = useHistory();

  //functions
  const checkForEnter = (e) => { //allows Enter key to work for searchbar
    if (e.key === 'Enter') {
      searchForTerm();
    }
  }

  const searchForTerm = async () => { //runs search
    history.push(`/search/${searchTerm}`);
  }

  const updateSearchTerm = (e) => { //updates search term while typing (to be used with dynamic search)
    setSearchTerm(e.target.value);
  }

  //JSX
    return (
        <li className={styles.searchContainer}>
          <div className={styles.searchBar}>
            <input
            type="text"
            name="q"
            placeholder="Search for anything"
            value={searchTerm}
            onChange={updateSearchTerm}
            onKeyPress={checkForEnter}
            />
            <button onClick={searchForTerm}>
              <i className="fas fa-search fa-lg" />
            </button>
          </div>
        </li>
    )
}

export default SearchBar;