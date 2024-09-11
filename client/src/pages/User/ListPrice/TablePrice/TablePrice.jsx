import React from 'react';

function TablePrice({ pricingPlans }) {
    const renderStars = (num) => {
        return Array(num)
            .fill(0)
            .map((_, i) => (
                <span key={i} className="text-yellow-500">
                    ★
                </span>
            ));
    };

    return (
        <table className="table-auto w-full border-collapse border-spacing-4 border border-gray-300 bg-white my-8">
            <thead>
                <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left">Chi tiết</th>
                    {pricingPlans.map((plan, index) => (
                        <th
                            key={index}
                            className={`border border-gray-300 px-4 py-2 text-center text-white ${plan.color}`}
                        >
                            {plan.title}
                            <div>{renderStars(plan.stars)}</div>
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="border border-gray-300 px-4 py-2">Giá ngày</td>
                    {pricingPlans.map((plan, index) => (
                        <td key={index} className="border border-gray-300 px-4 py-2 text-center">
                            {plan.priceDay}
                            <br />
                            <span className="text-gray-500">(Tối thiểu 3 ngày)</span>
                        </td>
                    ))}
                </tr>
                <tr>
                    <td className="border border-gray-300 px-4 py-2">Giá tuần (7 ngày)</td>
                    {pricingPlans.map((plan, index) => (
                        <td key={index} className="border border-gray-300 px-4 py-2 text-center">
                            {plan.priceWeek}
                        </td>
                    ))}
                </tr>
                <tr>
                    <td className="border border-gray-300 px-4 py-2">Giá tháng (30 ngày)</td>
                    {pricingPlans.map((plan, index) => (
                        <td key={index} className="border border-gray-300 px-4 py-2 text-center">
                            <div className="line-through text-red-500">{plan.priceMonth.original}</div>
                            <div className="text-green-500">{plan.priceMonth.discountNote}</div>
                            <div className="font-bold text-black">{plan.priceMonth.discounted}</div>
                        </td>
                    ))}
                </tr>
                <tr>
                    <td className="border border-gray-300 px-4 py-2">Giá đẩy tin</td>
                    {pricingPlans.map((plan, index) => (
                        <td key={index} className="border border-gray-300 px-4 py-2 text-center">
                            {plan.boostPrice}
                        </td>
                    ))}
                </tr>
                <tr>
                    <td className="border border-gray-300 px-4 py-2">Màu sắc tiêu đề</td>
                    {pricingPlans.map((plan, index) => (
                        <td key={index} className="border border-gray-300 px-4 py-2 text-center font-bold text-red-500">
                            {plan.titleColor}
                        </td>
                    ))}
                </tr>
                <tr>
                    <td className="border border-gray-300 px-4 py-2">Tự động duyệt</td>
                    {pricingPlans.map((plan, index) => (
                        <td key={index} className="border border-gray-300 px-4 py-2 text-center">
                            {plan.autoApprove ? (
                                <span className="text-green-500">✓</span>
                            ) : (
                                <span className="text-red-500">✗</span>
                            )}
                        </td>
                    ))}
                </tr>
                <tr>
                    <td className="border border-gray-300 px-4 py-2">Hiển thị số điện thoại ở trang danh sách</td>
                    {pricingPlans.map((plan, index) => (
                        <td key={index} className="border border-gray-300 px-4 py-2 text-center">
                            {plan.showPhone ? (
                                <span className="text-green-500">✓</span>
                            ) : (
                                <span className="text-red-500">✗</span>
                            )}
                        </td>
                    ))}
                </tr>
                <tr>
                    <td className="border border-gray-300 px-4 py-2">Huy hiệu nổi bật</td>
                    {pricingPlans.map((plan, index) => (
                        <td key={index} className="border border-gray-300 px-4 py-2 text-center">
                            {plan.highlightBadge ? (
                                <span className="text-green-500">✓</span>
                            ) : (
                                <span className="text-red-500">✗</span>
                            )}
                        </td>
                    ))}
                </tr>
                {/* <tr>
                    <td className="border border-gray-300 px-4 py-2"></td>
                    {pricingPlans.map((plan, index) => (
                        <td key={index} className="border border-gray-300 px-4 py-2 text-center">
                            <button className="bg-blue-600 text-white px-8 py-4 rounded">{plan.buttonLabel}</button>
                        </td>
                    ))}
                </tr> */}
            </tbody>
        </table>
    );
}

export default TablePrice;
