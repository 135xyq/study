import React from "react";
import {Routes,Route,Outlet,Link} from "react-router-dom";

export default function QuickStart() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Test></Test>}></Route>
                <Route path="invoices/*" element={<Invoices />} />
                <Route path="dashboard" element={<Dashboard />} />
            </Route>
        </Routes>
    );
}

function Layout() {
    return (
        <div>
            <h1>Welcome to the app!</h1>
            <nav>
                <Link to="invoices">Invoices</Link>    |{" "}
                <Link to="dashboard">Dashboard</Link>
            </nav>
            <div>
                <Outlet />
            </div>
        </div>
    );
}

function Invoices() {
    return <>
        <hr/>
        <nav>
            <Link to="">/</Link>    |{" "}
            <Link to="childInvoivess">childInvoivess</Link>
        </nav>
        <hr/>
        <hr/>
        <Routes>
            <Route path="/" element={<DashboardHome />} />
            <Route path="childInvoivess" element={<ChildInvoivess></ChildInvoivess>}></Route>
        </Routes>
    </>
}

function Dashboard() {
    return <h1>Dashboard</h1>;
}

function Test(){
    return <div>Test</div>
}

function NotFound(){
    return <div>404</div>
}

function DashboardHome(){
    return <div>DashboardHome</div>
}

function ChildInvoivess(){
    return <div>childInvoivess</div>
}