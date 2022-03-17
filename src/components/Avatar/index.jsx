import React from 'react';
import s from './styles.module.scss';
const Avatar = ({ src, alt }) => {
  return (
    <div className={s.wrapper}>
      <img src={src} alt={alt} width={128} height={128} className={s.avatar}></img>
    </div>
  );
};

export default Avatar;
