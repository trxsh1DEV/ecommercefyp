import React, { useState } from 'react';
import './style.css';
import { MainLinesPcData } from '../../utils/data';

const MainLinesPc: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number | null>(0);

  const handleItemClick = (index: number) => {
    setActiveItem(index);
  };
  return (
    <section className="line-products">
      {MainLinesPcData.map((data, index) => (
        <div
          key={index}
          className={`card ${activeItem === index ? 'active' : ''}`}
          onClick={() => handleItemClick(index)}
        >
          <img className="img-line-products" src={data.icon} alt={data.text} />
          <span className="span-line-products">{data.text}</span>
        </div>
      ))}
    </section>
  );
};

export default MainLinesPc;
