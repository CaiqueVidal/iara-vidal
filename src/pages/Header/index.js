import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default function Header() {
    return(
        <div>
            <h1>Iara Vidal</h1>
            <nav className="navigation">
                <ul>
                    <li>
                        <Link className="back-link" to="/iara-vidal">portfólio</Link>
                    </li>
                    <div className="circle"></div>
                    <li>
                        <Link className="back-link" to="/sobre">sobre</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}