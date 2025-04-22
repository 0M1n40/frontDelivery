import './SearchBar.css';
import searchIcon from './../../assets/searchbar.svg';
import { PLACEHOLDER_MAP, PageType } from './config';

type SearchBarProps = {
  page?: PageType;
};

function SearchBar({ page = 'default' }: SearchBarProps) {
  const placeholder = PLACEHOLDER_MAP[page] || PLACEHOLDER_MAP.default;

  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder={placeholder}
        className="search-input"
      />
      <img
        src={searchIcon}
        alt="Ícone de pesquisa"
        className="search-icon"
      />
    </div>
  );
}

export default SearchBar;