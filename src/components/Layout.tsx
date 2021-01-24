import React, { useEffect } from "react";
import GlobalHeader from '../components/GlobalHeader.tsx';
import InfoFloater from "./InfoFloater.tsx";

type LayoutProps = {
    location: Record<string | number, any>
    title: string
    isPost: boolean
    children: any
};

const Layout: React.FC<LayoutProps> = ({ location, children }) => {
    const rootPath = `/`;
    const isRootPath = location.pathname === rootPath;

    return (
        <div className='global-wrapper'>
            <GlobalHeader />
            <div className='layout-wrapper' data-is-root-path={isRootPath}>
                {/* <div className='floater'>
                    <InfoFloater />
                </div> */}
                <main className='main-wrapper'>
                    {children}
                </main>
            </div>
            <footer className='global-footer'>
                <a href="">깃허브</a>
            </footer>
        </div>
    )
};

export default Layout