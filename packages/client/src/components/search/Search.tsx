import React, {FunctionComponent, MouseEventHandler} from 'react';
import styles from './Search.module.scss'

interface ISearchProps {
    onClick: MouseEventHandler<HTMLDivElement>;
    searchInfo: string;
    setSearchInfo: React.Dispatch<React.SetStateAction<string>>;
}

const Search: FunctionComponent<ISearchProps> = ({onClick, searchInfo, setSearchInfo}) => {
    return <div className={styles.input} data-testid="search">
        <input data-testid="search-input"
            type={"text"}
            placeholder={"Search..."}
            value={searchInfo}
            onChange={(event) => setSearchInfo(event.target.value)}
        />
        <img className={styles.searchIcon} data-testid="search-button" onClick={onClick} src={"/resources/images/search.png"} alt={""}/>
    </div>
};

export default Search;