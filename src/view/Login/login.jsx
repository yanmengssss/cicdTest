import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  return (
    <Button type="primary" onClick={() => navigate('/home')}>登录</Button>
  );
}

export default Login;
