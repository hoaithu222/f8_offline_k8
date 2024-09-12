import "./Assets/Style.scss"
import router from './Utils/router';
import { About } from "./Pages/About";
import { Products } from "./Pages/Products";
import { ProductDetail } from "./Pages/ProductDetail";
import { DefaultLayout } from "./Layouts/Default";
import { Home } from './Pages/Home';
export const App = () => {
    return router(
        [
            {
                path: "/",
                component: Home,
            },
            {
                path: "/gioi-thieu",
                component: About,
            },
            {
                path: "/san-pham",
                component: Products,
            },
            {
                path: "/san-pham/:id",
                component: ProductDetail,
            },
        ],
        DefaultLayout
    )
};
