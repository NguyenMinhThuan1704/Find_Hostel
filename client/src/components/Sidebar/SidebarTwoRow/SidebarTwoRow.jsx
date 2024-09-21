import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import * as actions from 'store/actions';
import { createSearchParams, useLocation, useNavigate } from 'react-router-dom';

function SidebarTwoRow({ data, title, type }) {
    const pairedData = [];
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    for (let i = 0; i < data.length; i += 2) {
        pairedData.push(data.slice(i, i + 2));
    }

    const handleFilterPosts = (code) => {
        navigate({
            pathname: location.pathname,
            search: createSearchParams({
                [type]: code,
            }).toString(),
        });
        dispatch(actions.getPostsLimit({ [type]: code }));
    };

    return (
        <div className="border border-solid rounded-xl bg-white">
            <div className="p-6">
                <h2 className="font-bold text-[18px]">{title}</h2>
                <div className="space-y-2 mt-6">
                    {pairedData.map((pair, index) => (
                        <div key={index} className="grid grid-cols-2 gap-2 border-b border-dashed border-gray-300 pb-2">
                            <div
                                onClick={() => handleFilterPosts(pair[0]?.code)}
                                className="text-[14px] cursor-pointer flex items-center group text-gray-600 hover:text-orange-600"
                            >
                                <FontAwesomeIcon
                                    icon={faAngleRight}
                                    className="mr-4 text-gray-400 text-[10px] group-hover:text-orange-600"
                                />
                                <p className="text-black group-hover:text-orange-600">{pair[0]?.value}</p>
                            </div>

                            {pair[1] ? (
                                <div
                                    onClick={() => handleFilterPosts(pair[1]?.code)}
                                    className="text-[14px] cursor-pointer flex items-center group text-gray-600 hover:text-orange-600"
                                >
                                    <FontAwesomeIcon
                                        icon={faAngleRight}
                                        className="mr-4 text-gray-400 text-[10px] group-hover:text-orange-600"
                                    />
                                    <p className="text-black group-hover:text-orange-600">{pair[1]?.value}</p>
                                </div>
                            ) : (
                                <div></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SidebarTwoRow;
