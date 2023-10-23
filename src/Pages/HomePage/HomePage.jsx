import LoginForm from "components/LoginForm/LoginForm";
import { useSelector } from 'react-redux';
import { selectAuthentificated } from 'redux/authReducer';
import { Navigate } from 'react-router-dom';

export const HomePage = () => {
    
  const authintificated = useSelector(selectAuthentificated);

  if (authintificated) return <Navigate to="/content" />;
    return (
      <div>
        <p>Hi!</p>
        <LoginForm />
      </div>
    )
  };
  
  export default HomePage;