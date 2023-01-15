import React from 'react';
import styles from './styles.module.css';

export interface ColorProps {
  children: string;
}

export const Color = (props: ColorProps) => {
  return (
    <div className="flex items-center gap-sm">
      <span
        className="w-md h-md rounded-sm"
        style={{ backgroundColor: props.children }}
      />
      <div>{props.children}</div>
    </div>
  );
};
