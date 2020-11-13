import React from 'react'
import Tag from './Tag'


export default function TagList({tagList}:any) {
    if (tagList.length===0){
        return (
            <div className="no-tag">
                No tags availabe
            </div>
        )

    }
    return (
        <div>
             {tagList.map((tag:any)=>{
                return(
                <Tag tag={tag}></Tag>
                )
            })}
        </div>
    )
}
