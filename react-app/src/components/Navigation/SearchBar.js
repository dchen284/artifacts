import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from '../../css-modules/NavBar.module.css'


const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const history = useHistory();

  const updateSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  }

  const searchForTerm = async () => {
    history.push(`/search/${searchTerm}`);
  }

  const checkForEnter = (e) => {
    if (e.key === 'Enter') {
      searchForTerm();
    }
  }

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