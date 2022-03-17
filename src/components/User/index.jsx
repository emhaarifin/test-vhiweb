import Avatar from 'components/Avatar';
import React from 'react';
import cn from 'utils/cn';
import s from './styles.module.scss';
const User = ({ avatar, first_name, last_name, email }) => {
  const name = `${first_name} ${last_name}`;
  return (
    <div className=' flex flex--justify-center flex--column flex--align-center'>
      <div className=''>
        <div className='flex flex--justify-center  flex--align-center'>
          <Avatar src={avatar} alt={name} />
        </div>
        <div>
          {[
            ['Name', name],
            ['Email', email],
          ].map(([label, content]) => (
            <div key={label} className={cn(`${s.userContent} my-2 py-2 px-3`)}>
              <p className='text--white text--bold m-0'>{label}</p>
              <p className='text--white m-0'>{content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default User;
