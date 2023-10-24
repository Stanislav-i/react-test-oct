import LoginForm from 'components/LoginForm/LoginForm';
import { useSelector } from 'react-redux';
import { selectAuthentificated, selectLoginError } from 'redux/authReducer';
import { Navigate } from 'react-router-dom';

export const HomePage = () => {
  const error = useSelector(selectLoginError);

  const authintificated = useSelector(selectAuthentificated);

  if (authintificated) return <Navigate to="/content" />;
  return (
    <div
      style={{
        padding: '5px 20px',
        backgroundColor: 'rgb(186, 164, 189)',
        borderRadius: '5px',
      }}
    >
      <h1
        style={{
          textAlign: 'center',
        }}
      >
        LOG IN
      </h1>
      <LoginForm />
      {error && (
        <div
          style={{
            backgroundColor: 'rgb(218, 74, 64)',
            textAlign: 'center',
            padding: '10px',
            marginTop: '10px',
          }}
        >
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default HomePage;
