import { navigate } from "../Utils/router";

export const ProductDetail = ({ params }) => {
    const { id } = params || {};

    if (!id) {
        return `<h1>Sản phẩm không tồn tại</h1>`;
    }

    return `
    <h1>Chi tiết sản phẩm: ${id}</h1>
    <button onclick="navigate('/san-pham')">Back</button>
    `;
};
