import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Cart from './page/cart';
import Manage from './page/manage';
import List from './page/list';
import Pay from './page/pay';
import Food from './common/food';
import CartAPI from './common/cart';
import PayAPI from "./common/pay";
import { useState, useEffect, FC } from 'react';
import iconSucess from './img/anydo_104098.png'
import Detail from './page/detail';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import 'antd/dist/antd.css';
import { Col, Row } from 'antd';

const   App : FC = ()=> {

  const dispatch = useDispatch() ;  
 
    const cart = new CartAPI() ; 
     cart.getCart() === null && cart.setAll([]) ;
    const pay  = new PayAPI() ; 
    pay.getPay ===null && pay.setAll([]);
    const [mess , setMess] = useState<null | string>(null);
    const handleMess = (mess : string | null) : void=>{
      setMess(mess)
    }
   
    useEffect(()=>{
     
      const time = setTimeout( ()=>{
        setMess(null)
      } , 2000)
      return ()=>{
        clearTimeout(time)
      }
    } , [mess])
useEffect(()=>{
  dispatch({type : "SET_FOOD_AS"})
} , [])
  return (
    <Router>
        <nav>
          <Row align='middle' className='container'>
            <Col  span={8}>
              <Link to="/">List</Link>
            </Col>
            <Col span={8}>
              <Link to="/cart">Cart</Link>
            </Col>
            <Col span={8}>
              <Link to="/manage">Manage</Link>
            </Col>
    
          </Row>
        </nav>
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/manage" element={<Manage />} />
          <Route path="/pay" element={<Pay handleMess={handleMess} />} />
          <Route path="/" element={
                                 <List
                                    handleMess={handleMess} />} 
                                  />
          <Route path="/detail" element={<Detail 
                                         handleMess={handleMess} 
                                         />} />
        </Routes>
       
    </Router>
  );
}

export default App;
