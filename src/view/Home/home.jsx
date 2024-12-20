import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import io from 'socket.io-client';
import { getUserInfo } from '../../apis/api';
const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    getUserInfo().then(res => {
      console.log(res)
    })
  }, []);

  return (
    <Button type="primary" onClick={() => navigate('/login')}>首页测试CICD</Button>
  );
}

export default Home;
