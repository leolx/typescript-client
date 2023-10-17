import React from 'react';
import { Layout,Menu } from 'antd'
import { Route, Routes, useNavigate} from 'react-router-dom';
import { Home } from './home';
import { Login } from './login';
import { Register } from './register';
const { Header,Content } = Layout;

const getItem = (label:string, key:string, icon:any, children:any) => {
  return {
    label,
    key,
    icon,
    children,
  };
}

const items = [
  getItem("Home", "/", null, null),
  getItem("Register", "/register ", null, null),
  getItem("Login", "/login", null, null),
]

function App() {
  const navigate =useNavigate();

  const onClick = (e:any) => {
  navigate(e.key, { replace: true });
  }
  return (
  
    <Layout className="layout">
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <Menu
          theme="dark"
          mode="horizontal"
          items={items}
          onClick={onClick}
        >
   
        </Menu>
      </Header>
      <Content>
        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>    
      </Content>
    </Layout>  
  
  );
};

export default App;
