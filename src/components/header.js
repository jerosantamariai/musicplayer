import React from 'react';

const Header = props => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Music Player</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/#"><i class="fas fa-step-backward"></i></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/#"><i class="fas fa-play"></i></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/#"><i class="fas fa-step-forward"></i></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header;