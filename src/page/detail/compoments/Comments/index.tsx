import React from 'react'
import { PropsCommentItem } from '../../interface'
import CommentItem from './components/CommentItem'
import "./style.css"
interface Props{
  comment : PropsCommentItem[] , 

}

export default function Comments(props : Props ) {
    const {comment } = props;
  return (
    <div className='comment'>
        <p>Comment</p>
        <div className='container'>

       
        {
            comment.map((item : PropsCommentItem , index : number)=>{
                return <CommentItem
                
                key={index}
                {...item}
                />
            })
        }
     </div>
    </div>
  )
}
