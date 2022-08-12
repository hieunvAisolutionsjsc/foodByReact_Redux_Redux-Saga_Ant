
import React from 'react'
import { Avatar, Col, Row } from 'antd'

import { PropsCommentItem } from '../../../../interface'
import { UserOutlined } from '@ant-design/icons'



export default function CommentItem(props : PropsCommentItem) {
    const {name , avatar ,  comment} = props
  return (
    <div className="comment__item">
        <Row align='middle' className="comment__item--avatar">
            <Col>
                <Avatar src={avatar} icon={<UserOutlined />} alt=""/>
            </Col>
            <p>{name}</p>
        </Row>
        <p>{comment}</p>
    </div>
  )
}
