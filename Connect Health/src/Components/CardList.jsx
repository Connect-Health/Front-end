import React from 'react';
import Card from '../Nutricao/Components/Card';

const CardList = ({ profissional }) => {
  return (
    <div className="grid grid-cols-2 gap-x-[5%] mx-[2.5%] gap-y-9">
      {profissional.map((profissional) => (
        <Card key={profissional.id} profissional={profissional} />
      ))}
    </div>
  );
};

export default CardList;