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
             {tagList.map((tag:any,i:number)=>{
                return(
                <Tag key={i} tag={tag}></Tag>
                )
            })}
        </div>
    )
}
