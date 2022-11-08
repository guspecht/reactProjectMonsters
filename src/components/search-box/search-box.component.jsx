import "./search-box.styles.css";

// Implicit return
// Implicit returns are optional and solely used for shortening the code within a function body.
const SearchBox = ({ className, placeHolder, onChangeHandler }) => (
    <input 
        className={`search-box ${className}`} 
        type='search' 
        placeholder={placeHolder}
        onChange={onChangeHandler}
    />
)

export default SearchBox;