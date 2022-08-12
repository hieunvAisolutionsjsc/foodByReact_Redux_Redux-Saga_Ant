export const  columnsManage = [
    {
      title: 'STT',
      dataIndex: 'stt',
      key: 'stt',
    },
    {
      title: 'Images',
      dataIndex: 'imgsmail',
      key: 'dc2',
    },
    
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a : any, b : any) => (a.name).localeCompare(b.name),
      width : 150
    },
   
    {
      title: 'Dicription',
      dataIndex: 'dc2',
      key: 'dc2',
      isHide : true , 
      sorter: (a : any, b : any) => (a.dc2).localeCompare(b.dc2),
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      isHide : true , 
      sorter: (a : any, b : any) => a.price - b.price,
    },
    {
      title: 'Rate',
      dataIndex: 'rate',
      key: 'rate',
      isHide : true , 
      sorter: (a : any, b : any) => a.rate - b.rate,
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      width : "120px"
    },
  ];