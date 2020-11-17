import React from 'react'
import Tag from './Tag'
import {TagList as taglist} from '../../features/typeDefinition'

const TagList: React.FC<taglist> = (props: taglist) => {
    if (props.tag.length===0){
        return (
            <div className="no-tag">
                No tags availabe
            </div>
        )
    }
    return (
        <div>
             {props.tag.map((tag:any,i:number)=>{
                return(
                <Tag key={i} tag={tag}></Tag>
                )
            })}
        </div>
    )
}
export default TagList
