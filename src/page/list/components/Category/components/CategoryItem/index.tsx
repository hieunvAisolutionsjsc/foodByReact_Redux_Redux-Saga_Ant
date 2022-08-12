import { Col } from 'antd';
import React from 'react'
import { categoryItem } from '../../../../interface';

export default function CategoryItem(props : categoryItem) {
    const {img , name ,nameT ,category , changeCategory}  = props ; 

  return (
     <Col 
     xs={{span : 11}}
     sm={{span : 8}}
     md={{span : 8}}
     
      >
      <div className={`category__item ${category === nameT} ` } value-id="a" onClick={()=>{changeCategory(nameT)}}>
    <p>{name}</p>
    <div className="category__item--img">
        <img src={img} alt="" />
    </div>
    </div>
</Col>
  )
}
