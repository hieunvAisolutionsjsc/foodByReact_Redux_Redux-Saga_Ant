import { Select } from 'antd';
import { Option } from 'antd/lib/mentions';
import React from 'react';
import { Controller } from 'react-hook-form';

const SelectField = ({ control , name , label , dataOption}) => {
    const onChange = (value) => {
        console.log(`selected ${value}`);
      };
      
      const onSearch = (value) => {
        console.log('search:', value);
      };
    return (
        <div>
         <p>{label}</p>
         <Controller
            name={name}
         control={control}
          render={({ field: { onChange, onBlur, value, ref } }) => (
             <Select
           showSearch
           placeholder="Select country"
           optionFilterProp="children"
           onChange={onChange}
          //  onSearch={onSearch}
        
           filterOption={
                   (input, option) =>
                    option.children.toLowerCase()
                    .includes(input.toLowerCase())}
         >
            {
               dataOption.map((item , index)=>{
                       
                         return <Option value={item.value}>{item.name}</Option>
                  })
            }
            </Select>
        )}
     
         />
        </div>
    );
}

export default SelectField;
