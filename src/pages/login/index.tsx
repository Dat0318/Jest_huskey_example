import React from 'react';
// @ts-ignore
import { unauthorizedRequest } from '../../api/request/unauthorizedRequest.ts';
import './login.css';
import { toast } from 'react-toastify';

export interface Props {
  shouldRemember: boolean;
  onUsernameChange: (username: string) => void;
  onPasswordChange: (password: string) => void;
  onRememberChange: (remember: boolean) => void;
  onSubmit: (val: any) => any;
}

export function Login(props: Props) {
  const [username, setUsername] = React.useState(''); // test100@gmail.com
  const [password, setPassword] = React.useState(''); // 123456
  const [remember, setRemember] = React.useState(false);

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setUsername(value);
    props.onUsernameChange(value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPassword(value);
    props.onPasswordChange(value);
  };

  const handleRememberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setRemember(checked);
    props.onRememberChange(checked);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const params = {
        email: username,
        password,
        remember,
      };
      const res = await unauthorizedRequest.post<any, any>('/login', params);
      props.onSubmit({ status: res.status, data: { email: res?.user?.email || '' } });
      const { user, accessToken } = res.data || {};
      localStorage.setItem('token', accessToken);
      localStorage.setItem('user', JSON.stringify(user));
      // location.reload();
    } catch (err) {
      props.onSubmit(err);
      toast.error(err?.data?.message || err.message);
    }
  };

  return (
    <div className="login">
      <div className="Auth-form-container">
        <form className="Auth-form" data-testid="login-form" onSubmit={handleSubmit} method="post">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="form-group mt-3">
              <label>User name</label>
              <input
                data-testid="username"
                type="text"
                name="username"
                value={username}
                onChange={handleUsernameChange}
                className="form-control mt-1"
                placeholder="Enter Your name"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                data-testid="password"
                type="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="form-group mt-3">
              <label>
                <input
                  data-testid="remember"
                  name="remember"
                  type="checkbox"
                  className="me-2"
                  checked={remember}
                  onChange={handleRememberChange}
                />
                Remember me?
              </label>
            </div>
            <div className="d-grid gap-2 m-auto mt-4 w-50">
              <button type="submit" className="btn btn-primary" data-testid="submit">
                Login
              </button>
            </div>
            <p className="forgot-password text-center mt-4">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
