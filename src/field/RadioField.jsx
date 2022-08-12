import { Radio } from 'antd';
import React from 'react';

const RadioField = ({control ,  name  , label, dataRadio}) => {
    return (
        <div>
        <p >{label}</p>
         <Radio.Group name={name} defaultValue={1}>
         {
            dataRadio.map((item , index)=>{

                return<Radio  name={name} value={item}>{item}</Radio>
            })
         }
         </Radio.Group>
        </div>
    );
}

export default RadioField;
