import Navigo from "navigo";
import { Home } from "../Pages/Home";
import { About } from "../Pages/About";
import { Products } from "../Pages/Products";
import { ProductDetail } from "../Pages/ProductDetail";
import { DefaultLayout } from "../Layouts/Default";
import { Errors } from "../Error";

// Tạo router Navigo với cấu hình lắng nghe `data-route`
const router = new Navigo("/", { hash: false, linksSelector: "a[data-route]" });
const render = (component, useLayout = true) => {
    const rootElement = document.querySelector("#app");

    // Nếu useLayout = true, sử dụng DefaultLayout, ngược lại hiển thị trực tiếp component
    if (useLayout) {
        rootElement.innerHTML = DefaultLayout().replace("{body}", component());
    } else {
        rootElement.innerHTML = component(); // Hiển thị trực tiếp component mà không có layout
    }
};
// Định nghĩa các route
router.on({
    "/": () => render(Home),
    "/gioi-thieu": () => render(About),
    "/san-pham": () => render(Products),
    "/san-pham/:id": ({ data }) => render(() => ProductDetail({ params: data })),
});


router.notFound(() => {
    render(Errors, false); // Hiển thị lỗi mà không có layout
});
router.resolve();

export const navigate = (path) => {
    console.log(`Navigating to: ${path}`);
    router.navigate(path);
};


window.navigate = navigate;

export default router;
