import React from "react";
import {Routes,Route,Outlet,Link} from "react-router-dom";

export default function QuickStart() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="invoices" element={<Invoices />} />
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
    return <h1>Invoices</h1>;
}

function Dashboard() {
    return <h1>Dashboard</h1>;
}