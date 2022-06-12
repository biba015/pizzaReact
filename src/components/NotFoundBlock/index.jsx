import React from 'react';

import styles from './NotFoundBlock.module.scss';

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>
          😕 <br />
          Ничего не найдено
        </span>
      </h1>
      <p className={styles.descr}>
        К сожелению данная страница отсутствует в нашем интернет-магазине
      </p>
    </div>
  );
};

export default NotFoundBlock;
