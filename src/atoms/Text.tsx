import React from 'react';
import styles from './Text.module.css';

type TextProps = {
  children: React.ReactNode;
};

const Text: React.FC<TextProps> = ({ children }) => (
  <span className={styles.text}>{children}</span>
);

export default Text;
