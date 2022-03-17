import React from 'react';
import cn from 'utils/cn';
import s from './styles.module.scss';
const Loader = () => {
  return (
    <div className=' flex flex--justify-center flex--column flex--align-center'>
      <div className='flex flex--justify-center flex--column flex--align-center'>
        <div
          className='flex flex--justify-center flex--align-center skeleton'
          style={{ width: '128px', aspectRatio: '1', height: '128px', borderRadius: '4px' }}
        ></div>
        <div>
          {[['Name'], ['Email']].map(([label]) => (
            <div
              key={label}
              className={cn(`${s.userContent} my-2 py-2 px-3`)}
              style={{ borderRadius: '4px', minWidth: '230px' }}
            >
              <p className='text--white text--bold m-0'>{label}</p>
              <p className='text--white m-0 skeleton py-2'></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loader;
