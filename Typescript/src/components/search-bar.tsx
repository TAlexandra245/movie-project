import styled from "styled-components";

interface SearchBarProps {
    searchText: string;
    setSearchText: React.Dispatch<React.SetStateAction<string>>;
}

const SearchInput = styled.input`
`

 const SearchBar = ({searchText, setSearchText} : SearchBarProps) => {
    return(
            <SearchInput 
            type = 'text' 
            placeholder="Search for a movie" 
            value={searchText} 
            onChange ={(e) => setSearchText(e.target.value)}
            />
    )
 } 

 export default SearchBar;