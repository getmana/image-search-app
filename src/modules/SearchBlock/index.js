import { useState } from 'react';
import styles from './SearchBlock.module.css';
import PropTypes from 'prop-types';

export const SearchBlock = ({ onFetchData }) => {
    const [queryString, setQueryString] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);

    const handleChange = (e) => {
        setIsDisabled(e.target.value.length < 3);
        setQueryString(e.target.value);
    };

    const handleClick = () => {
        onFetchData(queryString);
    };

    return (
        <header className={styles.header}>
            <input
                type="text"
                name="search-field"
                minLength="3"
                maxLength="25"
                placeholder="Enter keyword"
                value={queryString}
                onChange={handleChange}
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        handleClick();
                    }
                }}
            />
            <button
                className={isDisabled ? 'disabled' : 'active'}
                disabled={isDisabled}
                onClick={handleClick}
            >
                Search
            </button>
        </header>
    );
};

SearchBlock.propTypes = {
    onFetchData: PropTypes.func,
};
