import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { loginUserThunk } from 'redux/authReducer';

export const LoginForm = () => {
  const emailInputId = nanoid();
  const passwordInputId = nanoid();
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const username = form.elements.username.value;
    const password = form.elements.password.value;

    dispatch(
      loginUserThunk({
        username,
        password,
      })
    );

    form.reset();
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'Column',
          gap: '10px',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <label htmlFor={emailInputId}>Username</label>
        <input
          type="text"
          name="username"
          title="Valid name should be provided"
          id={emailInputId}
          required
        />

        <label htmlFor={passwordInputId}>Password</label>
        <input
          type="text"
          name="password"
          title="Valid email should be provided"
          id={passwordInputId}
          required
        />

        <button
          type="submit"
          style={{
            padding: '5px 20px',
            backgroundColor: 'rgb(218, 118, 229)',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Log In!
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
