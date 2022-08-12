import { Input } from 'antd';
import React from 'react';
import { Controller } from 'react-hook-form';

const TextField = ({ rules  , control, name , label, type , defaultValue}) => {
    // const {formState : {errors}} =control ; 
    
    return (
        <div style={{margin : "0 .4rem" , position: "relative"}}>
        <label>{label}</label>
        <Controller
           name={name}
           control={control}
           rules={rules}
           
           render={({ field , fieldState:{error} }) =>  
           {
            
              return <><Input
              defaultValue={defaultValue}
           type={type}
           status={error && "error"}
              {...field}
              allowClear 
         />
           {error && <p style={{position : "absolute" , bottom : "-25px" , right : "0" , color : "red" , fontSize : "10px"}}>{error.message}</p>}
         </>
           }
           
         }
      />
        </div>
    );
}

export default TextField;
