import React from 'react';
import {Link} from 'react-router-dom';
import SearchField from 'react-search-field';

export const Header: React.FC = () => {

    const onChange = (value: any) => {
        console.log(value); // TODO: and here try to filter by names
    }

    return (
        <div className="header">
            <Link to='/' style={{ textDecoration: 'none' }}>
                <div className="header__title">Streems test</div>
            </Link>
            {/*<SearchField placeholder="Search..."*/}
            {/*             onChange={onChange}*/}
            {/*             searchText="Find characters..."*/}
            {/*             classNames="header__search-field"*/}
            {/*/>*/}
        </div>
    );
}
