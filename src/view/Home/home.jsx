import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getUserInfo } from '../../apis/api';
const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    getUserInfo().then(res => {
      console.log(res,111)
    })
  }, []);

  return (
    <Button type="primary" onClick={() => navigate('/login')}>首页测试CICD,,,再次测试</Button>
  );
}

export default Home;
