import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SubMenuItem = ({ icon, title, description }) => {
  return (
    <>
    <div className='SubMenuItem_lt'>
      <FontAwesomeIcon icon={icon} />
    </div>
    <div className='SubMenuItem_rt'>
        <p>{title}</p>
        <span>{description}</span>
    </div>
    </>
  );
}

export default SubMenuItem;