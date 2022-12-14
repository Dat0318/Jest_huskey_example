import React from 'react';
import Button from 'antd/lib/button';
import Result from 'antd/lib/result';
import { useNavigate } from 'react-router';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button
          type="primary"
          onClick={() => {
            localStorage.removeItem('token');
            location.reload();
            return navigate('/', { replace: true });
          }}
        >
          Back Home
        </Button>
      }
    />
  );
};

export default NotFound;
