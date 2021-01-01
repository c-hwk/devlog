import React from "react";
import { Link } from "gatsby";
import GlobalHeader from '../components/GlobalHeader.tsx'

const Layout = ({ location, title, children }) => {
    const rootPath = `/`;
    const isRootPath = location.pathname === rootPath;
    let header

    if (isRootPath) {
        header = (
            <h1 className="main-heading">
                <Link to="/">{title}</Link>
            </h1>
        )
    } else {
        header = (
            <Link className="header-link-home" to="/">
                {title}
            </Link>
        )
    }

    return (
        <>
            <GlobalHeader />
            <div className='layout-wrapper'>
                <div className='global-wrapper' data-is-root-path={isRootPath}>
                    <header className='global-header'>{header}</header>
                    <main>{children}</main>
                </div>
                <footer className='global-footer'>
                    <a href="">깃허브</a>
                </footer>
            </div>
        </>
    )
}

export default Layout