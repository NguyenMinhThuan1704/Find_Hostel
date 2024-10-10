import React from 'react';

function Select({ label, options, value, setValue, type, reset, name }) {
    return (
        <div className="flex flex-col gap-2 flex-1">
            <label className="font-medium" htmlFor={`select-${type}`}>
                {label}
            </label>
            <select
                value={reset ? '' : value}
                onChange={(e) =>
                    !name ? setValue(e.target.value) : setValue((prev) => ({ ...prev, [name]: e.target.value }))
                }
                id={`select-${type}`}
                className="outline-none border border-gray-300 p-2 rounded-md w-full"
            >
                <option value="">{`--Chọn ${label}--`}</option>
                {options?.map((item) => {
                    return (
                        <option key={item.id} value={item.id}>
                            {item.name}
                        </option>
                    );
                })}
            </select>
        </div>
    );
}

export default Select;
