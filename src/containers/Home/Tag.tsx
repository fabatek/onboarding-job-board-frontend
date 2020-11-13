import React from 'react'

export default function Tag({tag}:any) {
    return (
        <span className="badge badge-secondary mr-2 my-2">
            {tag}
        </span>
    )
}
