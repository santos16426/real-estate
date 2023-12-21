// components/PropertyNotFound.tsx
import React from 'react';
import styles from './PropertyNotFound.module.scss';

const PropertyNotFound: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Oops! Property Not Found</h1>
        <p className={styles.text}>It seems like the property you&apos;re looking for doesn&apos;t exist.</p>
        <p className={styles.text}>Please check the link or explore our other amazing properties.</p>
      </div>
    </div>
  );
};

export default PropertyNotFound;
