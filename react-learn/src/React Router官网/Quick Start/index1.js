import React from "react";
import {Routes,Route,useParams} from "react-router-dom";

export default function QuickStart() {
    return (
        <Routes>
            <Route
                path="invoices/:invoiceId"
                element={<Invoice />}
            />
        </Routes>
    );
}

function Invoice() {
    let params = useParams();
    return <h1>Invoice {params.invoiceId}</h1>;
}