import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = ({ page }) => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname, page]);

    return null;
};

export default ScrollToTop;
