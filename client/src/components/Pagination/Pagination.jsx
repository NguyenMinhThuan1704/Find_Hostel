/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import PageNumber from './PageNumber';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { useSearchParams } from 'react-router-dom';

const Pagination = ({ page }) => {
    const { count } = useSelector((state) => state.post);
    const [arrPage, setArrPage] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isHideEnd, setIsHideEnd] = useState(false);
    const [isHideStart, setIsHideStart] = useState(false);
    const [searchParams] = useSearchParams();

    useEffect(() => {
        let page = searchParams.get('page');
        if (page && +page !== currentPage) {
            setCurrentPage(+page);
        } else if (!page) {
            setCurrentPage(1);
        }
    }, [searchParams]);

    useEffect(() => {
        let page = searchParams.get('page');
        if (page && +page !== currentPage) {
            setCurrentPage(+page);
        } else if (!page) {
            setCurrentPage(1);
        }
    }, [searchParams]);

    const limitPosts = process.env.REACT_APP_LIMIT_POST || 5;

    let maxPage = Math.ceil(count / limitPosts);
    useEffect(() => {
        if (currentPage > maxPage) {
            setCurrentPage(maxPage);
        }

        let end = currentPage + 2 > maxPage ? maxPage : currentPage + 2;
        let start = currentPage - 2 <= 1 ? 1 : currentPage - 2;
        let temp = [];
        for (let i = start; i <= end; i++) {
            temp.push(i);
        }
        setArrPage(temp);
        setIsHideEnd(currentPage >= maxPage - 2);
        setIsHideStart(currentPage <= 3);
    }, [count, currentPage]);

    return (
        <div className="flex items-center justify-center gap-2 py-5">
            {!isHideStart && (
                <PageNumber icon={<FontAwesomeIcon icon={faAnglesLeft} />} setCurrentPage={setCurrentPage} text={1} />
            )}
            {!isHideStart && <PageNumber text={'...'} />}
            {arrPage.length > 0 &&
                arrPage.map((item) => {
                    return (
                        <PageNumber key={item} text={item} setCurrentPage={setCurrentPage} currentPage={currentPage} />
                    );
                })}
            {!isHideEnd && <PageNumber text={'...'} />}
            {!isHideEnd && (
                <PageNumber
                    icon={<FontAwesomeIcon icon={faAnglesRight} />}
                    setCurrentPage={setCurrentPage}
                    text={maxPage}
                />
            )}
        </div>
    );
};

export default Pagination;
