import React from "react";
import { AppContext } from "../../App";
import styles from "./Search.module.scss";
export default function Search() {
  const { searchValue, setSearchValue } = React.useContext(AppContext);

  return (
    <div className={styles.search}>
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        placeholder="Поиск по товарам"
      />
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M17.7263 16.3951L13.289 11.9395C14.4299 10.6301 15.055 8.98262 15.055 7.26749C15.055 3.26026 11.6781 0 7.52752 0C3.37691 0 0 3.26026 0 7.26749C0 11.2747 3.37691 14.535 7.52752 14.535C9.08571 14.535 10.5706 14.0812 11.8401 13.2199L16.3111 17.7093C16.498 17.8967 16.7494 18 17.0187 18C17.2737 18 17.5156 17.9062 17.6992 17.7355C18.0893 17.3731 18.1017 16.7721 17.7263 16.3951ZM7.52752 1.89587C10.5955 1.89587 13.0913 4.30552 13.0913 7.26749C13.0913 10.2295 10.5955 12.6391 7.52752 12.6391C4.45956 12.6391 1.9637 10.2295 1.9637 7.26749C1.9637 4.30552 4.45956 1.89587 7.52752 1.89587Z"
          fill="#7B7B7B"
        />
      </svg>
    </div>
  );
}
