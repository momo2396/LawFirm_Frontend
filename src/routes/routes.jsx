import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ButtonOutline from "../components/Reuse/ButtonOutline";
import Home from "../components/pages/Home";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/home",
                element: <Home />
            },
            {
                path: "/about",
                element: <ButtonOutline>About Page</ButtonOutline>
            }
        ]
    }
])