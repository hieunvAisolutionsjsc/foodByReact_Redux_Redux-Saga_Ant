import { PlusOutlined } from '@ant-design/icons';
import { Upload } from 'antd';
import React, { useEffect, useState } from 'react';
import { Controller } from 'react-hook-form';

const FileField = ({control , label ,name , watch , defaultFileList }) => {
  const [fileList , setFileList] =useState(defaultFileList) ; 

  // useEffect(()=>{
  //   setFileList(defaultFileList)
  // } , [defaultFileList])
    const uploadButton = (
        <div>
          <PlusOutlined />
          <div
            style={{
              marginTop: 8,
            }}
          >
            Upload
          </div>
        </div>
      );
      console.log(watch(name))
    return (
        <>
        <label>{label}</label>
        <Controller 
        control={control}
        name = {name}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <Upload 
          style={{width : "700px"}}
        //   action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          method='GET'
          defaultFileList={fileList}
          listType="picture-card"
         
          //  fileList={defaultFileList}
          onChange={(e)=>{
            console.log(e)
            setFileList(e.fileList)
            onChange(e)
          }}
        >
        {fileList.length >= 1 ? "" : uploadButton }
             {/* {watch(name) ? (watch(name).fileList.length >= 1 ? "" : uploadButton) : uploadButton} */}
        </Upload>
          )}
       
  
  />
  </>
    );
    
}

export default FileField;
