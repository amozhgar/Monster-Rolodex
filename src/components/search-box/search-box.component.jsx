import "./search-box.css";
const SearchBox = ({ classname, placeholder, onChangeHandler }) => (
  <input
    className={classname}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
