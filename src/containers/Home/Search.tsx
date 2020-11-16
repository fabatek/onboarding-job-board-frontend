import React, {useState} from 'react'

export default function Search({handleSearch}:any) {

    const [text, setText] = useState('')

    return (
        <div>
            <input type="text" value={text} />
            <button className="btn btn-primary ml-2">Search</button>
            <br/>
            <span> XX jobs found</span>
        </div>
    )
}
