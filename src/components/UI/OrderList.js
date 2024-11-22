import React from 'react';

const OrderedList = ({ data }) => {
  return (
    <ul className='list-disc ml-5'>
      {data.map(item => (
        <li className='text-lg' key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

export default OrderedList;
