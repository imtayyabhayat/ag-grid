import React from 'react';
import classnames from 'classnames';
import { connectSearchBox } from 'react-instantsearch-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from './search-box.module.scss';

export default connectSearchBox(
    ({ refine, currentRefinement, className, onFocus }) => (
        <form className={classnames(className, styles['search-box'])}>
            <input
                className={classnames('SearchInput', styles['search-box__input'])}
                type="text"
                placeholder="Search..."
                aria-label="Search"
                onChange={e => refine(e.target.value)}
                value={currentRefinement}
                onFocus={onFocus}
            />
            <FontAwesomeIcon icon={faSearch} className={styles['search-box__icon']} />
        </form>
    )
);
