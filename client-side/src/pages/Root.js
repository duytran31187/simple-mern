import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";


const RootLayout = (props) => {

    return (
        <>
            <h1>Root layout</h1>
            <MainNavigation />
            <Outlet />
        </>
    )
};
export default RootLayout;