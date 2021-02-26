import React from 'react';
import {Link} from 'react-router-dom';

export const HeaderComponent: React.FC = () => {

    return (
        <div className="header">
            <Link to='/' style={{ textDecoration: 'none' }}>
                <div className="header__title">Streems test</div>
            </Link>
        </div>
    );
}
