import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer"; 
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <div>     
        <Header />	 {/* 공통 헤더 */}
        
        <main>		{/* 페이지 내용이 들어오는 영역 */}        
            <Outlet />	{/* Router 페이지가 여기 렌더링됨 */}
        </main>
        
        <Footer />	{/* 공통 Footer */}
        </div>
    );
}

export default Layout;