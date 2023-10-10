import React from "react";
import HeaderNav from "../pages/HeaderNav";

const MainLayout = ({ children }) => {

    return (
        <div>
            <HeaderNav />
            {children}
        </div>
    )

}
export default MainLayout;