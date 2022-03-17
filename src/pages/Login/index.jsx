import Button from 'components/Button';
import Input from 'components/Input';
import axios from 'config/axios';
import endpoint from 'config/endpoint';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
  const [{ email, password }, setUser] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [{ isError, errorMsg }, setError] = useState({
    isError: false,
    errorMsg: '',
  });

  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    try {
      e.preventDefault();
      const { url } = endpoint.login();
      const { token } = await (await axios.post(url, { email, password })).data;
      localStorage.setItem('token', token);
      navigate('users');
    } catch (err) {
      const { error } = err.response.data;
      setError({
        isError: true,
        errorMsg: error,
      });
    }
    setLoading(false);
  };

  useEffect(() => {
    const abortController = new AbortController();
    return () => {
      abortController.abort();
    };
  }, []);

  const disabledButton = !(email && password) | loading;
  return (
    <section className='flex flex--justify-center'>
      <div className='flex__item--10 flex__item--sm-8 flex__item--md-6 flex__item--lg-4'>
        <h4 className='text--center'>Login</h4>
        <div className='my-4'> </div>
        <form className='flex flex--column' onSubmit={handleSubmit}>
          <Input type='text' value={email} name='email' onChange={handleChange} placeholder='Email' />
          <Input
            type='password'
            name='password'
            autoComplete={password}
            value={password}
            onChange={handleChange}
            placeholder='Password'
          />
          <div className='my-2'></div>
          {isError && (
            <div className='flex flex--align-center flex--justify-center'>
              <p className='text--red300 m-0'>{errorMsg}</p>
            </div>
          )}
          <Button type='submit' className='background--blue400 text--white' disabled={disabledButton}>
            {loading ? 'Loading' : 'Login'}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Login;
