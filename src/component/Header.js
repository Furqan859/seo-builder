import React from 'react'

const Header = () => {
    return (
        <header className="siteheader" data-header-home>
            <a id="yoast-skip-link" className="screen-reader-text" href="/">Skip to content</a>
            <div className="siteheader--centered-content row mb-0">
                <h1><a href="/" className="siteheader__title">
                </a>

                </h1>
                <ul className="utility-menu">
                    <li className="login">
                        <a href="/" aria-label="Login">
                            <i className="fa fa-user"></i>
                            <span className="hide-on-tablet">Login</span>
                        </a>
                    </li>

                </ul>
            </div>
        </header>
    )
}

export default Header;