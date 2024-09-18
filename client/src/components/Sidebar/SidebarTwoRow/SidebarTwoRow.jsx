import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function SidebarTwoRow({ data, title }) {
    const pairedData = [];
    for (let i = 0; i < data.length; i += 2) {
        pairedData.push(data.slice(i, i + 2));
    }

    return (
        <div className="border border-solid rounded-xl bg-white">
            <div className="p-6">
                <h2 className="font-bold text-[18px]">{title}</h2>
                <div className="space-y-2 mt-6">
                    {pairedData.map((pair, index) => (
                        <div key={index} className="grid grid-cols-2 gap-2 border-b border-dashed border-gray-300 pb-2">
                            <Link
                                to="#"
                                className="text-[14px] flex items-center group text-gray-600 hover:text-orange-600"
                            >
                                <FontAwesomeIcon
                                    icon={faAngleRight}
                                    className="mr-4 text-gray-400 text-[10px] group-hover:text-orange-600"
                                />
                                <p className="text-black group-hover:text-orange-600">{pair[0]?.value}</p>{' '}
                            </Link>

                            {pair[1] ? (
                                <Link
                                    to="#"
                                    className="text-[14px] flex items-center group text-gray-600 hover:text-orange-600"
                                >
                                    <FontAwesomeIcon
                                        icon={faAngleRight}
                                        className="mr-4 text-gray-400 text-[10px] group-hover:text-orange-600"
                                    />
                                    <p className="text-black group-hover:text-orange-600">{pair[1]?.value}</p>{' '}
                                </Link>
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
