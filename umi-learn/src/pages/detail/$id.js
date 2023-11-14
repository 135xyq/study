import React from 'react';
import {useParams,useSearchParams} from "umi"

function DetailId(props) {
    const params = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(params,searchParams.toString())
    return (
        <div>
            <p>DetailId params: {params.id}</p>
            <p>DetailId query: {searchParams.toString()}</p>
        </div>
    );
}

export default DetailId;