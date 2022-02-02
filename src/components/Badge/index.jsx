import React from 'react';
import './Badge.scss';
import classNames from 'classnames';


const Badge = ({ color, onClick, className }) => (
   <span
      onClick={onClick}
      className={classNames(
         'badge',
         {
            [`badge--${color}`]: color,
         },
         className
      )}
   ></span>
);

export default Badge;

