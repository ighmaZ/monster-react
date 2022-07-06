
import { ChangeEvent } from 'react';
import '../index.css';


 type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler : (event: ChangeEvent<HTMLInputElement>) => void;
 };

const SearchBox = ({ className, placeholder, onChangeHandler, }: SearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type='search'
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;