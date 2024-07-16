import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home";

export const router = createBrowserRouter([
    {
        path: '/',
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'detail/:id',
                element: <div>Detail</div>
            }
        ]
    }
])