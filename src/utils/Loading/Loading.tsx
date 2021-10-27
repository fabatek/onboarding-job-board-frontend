import React from "react";

import './Loading.scss'

const Loading = () => {
    return (
        <div>
            <div className="spinner">
                <span className="spinner-inner-1"></span>
                <span className="spinner-inner-2"></span>
                <span className="spinner-inner-3"></span>
            </div>
        </div>
    )
}

export default Loading