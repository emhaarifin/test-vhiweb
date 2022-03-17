import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import endpoint from 'config/endpoint';
import axios from 'config/axios';
import User from 'components/User';
import Loader from 'components/User/loader';
const UserDetail = () => {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const abortController = new AbortController();
    setIsLoading(true);
    (async () => {
      try {
        const { url } = endpoint.user({ id });
        const { data } = await (await axios.get(url)).data;
        setUser(data);
      } catch (error) {}
      setIsLoading(false);
    })();
    return () => {
      abortController.abort();
    };
  }, [id]);
  return (
    <Fragment>
      {isLoading ? (
        <Loader />
      ) : user ? (
        <User avatar={user.avatar} first_name={user.first_name} last_name={user.last_name} email={user.email}></User>
      ) : (
        <div className='flex flex--align-center flex--justify-center ' style={{ height: '90vh' }}>
          User Not Found
        </div>
      )}
    </Fragment>
  );
};

export default UserDetail;
