import axios from 'config/axios';
import endpoint from 'config/endpoint';
import React, { useEffect, useState } from 'react';
import LoadOnScroll from 'components/LoadOnScoll';
import { Link } from 'react-router-dom';
import Avatar from 'components/Avatar';
const UserList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pagination, setPagination] = useState({ page: 1, total_pages: 1 });
  const [hashMore, setHashMore] = useState(true);
  useEffect(() => {
    const abortController = new AbortController();

    (async () => {
      setIsLoading(true);
      let i = 0;
      let { url, queryParams } = endpoint.users({ page: pagination.page });
      let urlQueryParams = Object.keys(queryParams).length > 0 ? '?' : '';
      for (const key in queryParams) {
        if (queryParams.hasOwnProperty.call(queryParams, key)) {
          urlQueryParams += (i > 0 ? '&' : '') + key + '=' + queryParams[key];
          i++;
        }
      }
      url += urlQueryParams;
      const { data, page, total_pages } = await (await axios.get(url)).data;
      setUsers((prev) => [...prev, ...data]);
      setPagination({ page, total_pages });
      setIsLoading(false);
    })();
    return () => {
      abortController.abort();
    };
  }, [pagination.page]);

  const loadMore = () => {
    const { page, total_pages } = pagination;
    if (page === total_pages) return setHashMore(false);
    setPagination((prev) => ({ ...prev, page: prev.page + 1 }));
    setHashMore(true);
  };

  return (
    <section className='container mx-auto'>
      <div className='flex flex--align-stretch flex--justify-start flex--wrap'>
        {users.length > 0 &&
          users?.map(({ id, first_name, last_name, avatar }) => (
            <div className='flex__item--6 flex__item--sm-4 flex__item--md-3 m-3' key={id}>
              <Link to={`${id}`}>
                <Avatar src={avatar} alt={`${first_name} ${last_name}`} />
              </Link>
            </div>
          ))}
      </div>
      {hashMore && users.length > 0 && <LoadOnScroll loading={isLoading} hashMore={hashMore} onLoad={loadMore} />}
    </section>
  );
};

export default UserList;
