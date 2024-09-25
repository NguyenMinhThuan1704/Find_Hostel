import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import * as actions from 'store/actions';
import { createSearchParams, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function SidebarTwoRow({ data, title, type }) {
    const pairedData = [];
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [activeCode, setActiveCode] = useState(null);

    for (let i = 0; i < data.length; i += 2) {
        pairedData.push(data.slice(i, i + 2));
    }

    const handleFilterPosts = (code) => {
        setActiveCode(code);
        dispatch(actions.getPostsLimit({ [type]: code }));
        navigate({
            pathname: '/',
            search: createSearchParams({
                [type]: code,
            }).toString(),
        });
    };

    useEffect(() => {
        const currentParams = new URLSearchParams(location.search);
        const currentCode = currentParams.get(type);
        if (currentCode) {
            setActiveCode(currentCode);
        } else {
            setActiveCode(null);
        }
    }, [location.search, type]);
    return (
        <div className="border border-solid rounded-xl bg-white">
            <div className="p-6">
                <h2 className="font-bold text-[18px]">{title}</h2>
                <div className="space-y-2 mt-6">
                    {pairedData.map((pair, index) => (
                        <div key={index} className="grid grid-cols-2 gap-2 border-b border-dashed border-gray-300 pb-2">
                            {pair.map((item, itemIndex) => (
                                <div
                                    key={itemIndex}
                                    onClick={() => handleFilterPosts(item?.code)}
                                    className={`text-[14px] cursor-pointer flex items-center group ${
                                        activeCode === item?.code
                                            ? 'text-orange-500'
                                            : 'text-gray-600 hover:text-orange-600'
                                    }`}
                                >
                                    <FontAwesomeIcon
                                        icon={faAngleRight}
                                        className={`mr-4 text-[10px] ${activeCode === item?.code ? 'text--orange-500' : 'text-gray-400 group-hover:text-orange-600'}`}
                                    />
                                    <p
                                        title={item?.value}
                                        className={`group-hover:text-orange-600 ${activeCode === item?.code ? 'text--orange-500' : 'text-black'}`}
                                    >
                                        {item?.value}
                                    </p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SidebarTwoRow;
