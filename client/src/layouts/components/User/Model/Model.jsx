import React, { useState, useEffect } from 'react';
import icons from 'utils/icons';
import { getNumbersPrice, getNumbersArea } from 'utils/Common/getNumbers';

const { GrLinkPrevious } = icons;
function Model({ setIsShowModal, content, name, handleSubmit, queries, arrMinMax, defaultText }) {
    const [present1, setPresent1] = useState(
        name === 'price' && arrMinMax?.priceArr
            ? arrMinMax?.priceArr[0]
            : name === 'area' && arrMinMax?.areaArr
              ? arrMinMax?.areaArr[0]
              : 0,
    );
    const [present2, setPresent2] = useState(
        name === 'price' && arrMinMax?.priceArr
            ? arrMinMax?.priceArr[1]
            : name === 'area' && arrMinMax?.areaArr
              ? arrMinMax?.areaArr[1]
              : 100,
    );
    const [activeEl, setActiveEl] = useState('');
    useEffect(() => {
        const activeTrackEl = document.getElementById('track-active');
        if (activeTrackEl) {
            if (present2 <= present1) {
                activeTrackEl.style.left = `${present2}%`;
                activeTrackEl.style.right = `${100 - present1}%`;
            } else {
                activeTrackEl.style.left = `${present1}%`;
                activeTrackEl.style.right = `${100 - present2}%`;
            }
        }
    }, [present1, present2]);
    const handleClickTrack = (e, value) => {
        const stackEl = document.getElementById('track');
        const stackRect = stackEl.getBoundingClientRect();
        let percent = value ? value : Math.round(((e.clientX - stackRect.left) * 100) / stackRect.width, 0);
        if (Math.abs(percent - present1) <= Math.abs(percent - present2)) {
            setPresent1(percent);
        } else {
            setPresent2(percent);
        }
    };
    const convert100toTarget = (percent) => {
        return name === 'price'
            ? (Math.ceil(Math.round(percent * 1.5) / 5) * 5) / 10
            : name === 'area'
              ? Math.ceil(Math.round(percent * 0.9) / 5) * 5
              : 0;
    };
    const convertTo100 = (percent) => {
        let target = name === 'price' ? 15 : name === 'area' ? 90 : 1;
        return Math.floor((percent / target) * 100);
    };
    const handleActive = (code, value) => {
        setActiveEl(code);
        let arrMaxMin = name === 'price' ? getNumbersPrice(value) : getNumbersArea(value);
        if (arrMaxMin.length === 1) {
            if (arrMaxMin[0] === 1) {
                setPresent1(0);
                setPresent2(convertTo100(1));
            }
            if (arrMaxMin[0] === 20) {
                setPresent1(0);
                setPresent2(convertTo100(20));
            }
            if (arrMaxMin[0] === 15 || arrMaxMin[0] === 90) {
                setPresent1(100);
                setPresent2(100);
            }
        }
        if (arrMaxMin.length === 2) {
            setPresent1(convertTo100(arrMaxMin[0]));
            setPresent2(convertTo100(arrMaxMin[1]));
        }
    };
    const handleBeforeSubmit = (e) => {
        let min = present1 <= present2 ? present1 : present2;
        let max = present1 <= present2 ? present2 : present1;
        let arrMinMax = [convert100toTarget(min), convert100toTarget(max)];
        handleSubmit(
            e,
            {
                [`${name}Number`]: arrMinMax,
                [name]: `Từ ${convert100toTarget(min)} - ${convert100toTarget(max)} ${name === 'price' ? 'triệu' : 'm2'}`,
            },
            {
                [`${name}Arr`]: [min, max],
            },
        );
    };
    return (
        <div
            onClick={() => {
                setIsShowModal(false);
            }}
            className="fixed top-0 left-0 right-0 bottom-0 bg-overlay-70 z-20 flex justify-center items-center"
        >
            <div
                onClick={(e) => {
                    e.stopPropagation();
                    setIsShowModal(true);
                }}
                className="w-1/2 bg-white rounded-md"
            >
                <div className="h-[45px] px-4 flex items-center border-b border-gray-200">
                    <span
                        className="cursor-pointer"
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsShowModal(false);
                        }}
                    >
                        <GrLinkPrevious size={24} />
                    </span>
                </div>
                {(name === 'category' || name === 'province') && (
                    <div className="p-4 flex flex-col max-h-[500px] overflow-y-auto">
                        <span className="py-2 flex gap-2 items-center border-b border-gray-200">
                            <input
                                type="radio"
                                name={name}
                                value={defaultText || ''}
                                id="default"
                                checked={!queries[`${name}Code`] ? true : false}
                                onChange={(e) => handleSubmit(e, { [name]: defaultText, [`${name}Code`]: null })}
                            />
                            <label htmlFor="default">{defaultText}</label>
                        </span>
                        {content?.map((item) => {
                            return (
                                <span key={item.code} className="py-2 flex gap-2 items-center border-b border-gray-200">
                                    <input
                                        type="radio"
                                        name={name}
                                        id={item.code || item.name_en}
                                        value={item.code || item.name_en}
                                        checked={item.code || item.name_en === queries[`${name}Code`] ? true : false}
                                        onChange={(e) =>
                                            handleSubmit(e, {
                                                [name]: item.value || item.name,
                                                [`${name}Code`]: item.code || item.name_en,
                                            })
                                        }
                                    />
                                    <label htmlFor={item.code || item.name_en}>{item.value || item.name}</label>
                                </span>
                            );
                        })}
                    </div>
                )}

                {(name === 'price' || name === 'area') && (
                    <div className="p-12 py-20 ">
                        <div className="flex flex-col items-center justify-center relative">
                            <div className="z-30 absolute top-[-48px] font-bold text-xl text-orange-600">
                                {present1 === 100 && present2 === 100
                                    ? `Trên ${convert100toTarget(present1)} ${name === 'price' ? 'triệu' : 'm2'} +`
                                    : `Từ ${
                                          present1 <= present2
                                              ? convert100toTarget(present1)
                                              : convert100toTarget(present2)
                                      } - ${
                                          present2 >= present1
                                              ? convert100toTarget(present2)
                                              : convert100toTarget(present1)
                                      } ${name === 'price' ? 'triệu' : 'm2'}`}
                            </div>
                            <div
                                onClick={handleClickTrack}
                                id="track"
                                className="slider-track h-[5px] absolute top-0 bottom-0 w-full bg-gray-300 rounded-full"
                            ></div>
                            <div
                                onClick={handleClickTrack}
                                id="track-active"
                                className="slider-track-active h-[5px] absolute top-0 bottom-0 bg-orange-600 rounded-full"
                            ></div>
                            <input
                                max="100"
                                min="0"
                                step="1"
                                type="range"
                                value={present1}
                                className="w-full appearance-none pointer-events-none absolute top-0 bottom-0"
                                onChange={(e) => {
                                    setPresent1(+e.target.value);
                                    activeEl && setActiveEl('');
                                }}
                            />
                            <input
                                max="100"
                                min="0"
                                step="1"
                                type="range"
                                value={present2}
                                className="w-full appearance-none pointer-events-none absolute top-0 bottom-0"
                                onChange={(e) => {
                                    setPresent2(+e.target.value);
                                    activeEl && setActiveEl('');
                                }}
                            />
                            <div className="absolute z-30 top-6 left-0 right-0 flex justify-between items-center">
                                <span
                                    className="cursor-pointer"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleClickTrack(e, 0);
                                    }}
                                >
                                    0
                                </span>
                                <span
                                    className="mr-[-12px] cursor-pointer"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleClickTrack(e, 100);
                                    }}
                                >
                                    {name === 'price' ? '15 triệu +' : name === 'area' ? 'Trên 90 m2' : ''}
                                </span>
                            </div>
                        </div>
                        <div className="mt-24">
                            <h4 className="font-medium mb-4">Chọn nhanh:</h4>
                            <div className="flex gap-2 items-center flex-wrap w-full">
                                {content?.map((item) => {
                                    return (
                                        <button
                                            key={item.code}
                                            onClick={() => handleActive(item.code, item.value)}
                                            className={`px-4 py-2 ${item.code === activeEl ? 'bg-blue-500 text-white' : 'bg-gray-200'}  rounded-md cursor-pointer`}
                                        >
                                            {item.value}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                )}
                {(name === 'price' || name === 'area') && (
                    <button
                        type="button"
                        className="w-1/2 absolute bottom-[170px] bg-[#FFA500] py-2 font-medium rounded-bl-md rounded-br-md"
                        onClick={handleBeforeSubmit}
                    >
                        ÁP DỤNG
                    </button>
                )}
            </div>
        </div>
    );
}

export default Model;
