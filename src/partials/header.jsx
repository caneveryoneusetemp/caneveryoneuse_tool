import React from 'react';

const Header = () => {
    return (
        <header className="header py-3 py-lg-4">
            <nav className="navbar navbar-expand-lg">
                <div className="container bg-white p-4 px-5 rounded-4">
                    <a className="navbar-brand" href="/"><img height="50" width="251" src="./images/logo.png" alt="Logo"/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavBar" aria-controls="mainNavBar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="mainNavBar">
                        <ul className="navbar-nav ps-lg-4 mb-2 mb-lg-0 font-weight-bold">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="https://caneveryoneuse.com/"><strong>ABOUT</strong></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="https://github.com/caneveryoneusetemp" target="_blank" rel="noreferrer"><strong>GITHUB</strong></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;