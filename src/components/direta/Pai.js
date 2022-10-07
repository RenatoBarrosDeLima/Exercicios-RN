import React from 'react';

import Filho from './Filho';

const CompFunc = props => {
  const x = 15;
  const y = 50;

  return (
    <>
      <Filho a={x} b={y} />
    </>
  );
};
export default CompFunc;
