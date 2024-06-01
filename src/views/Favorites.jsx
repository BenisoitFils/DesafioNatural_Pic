import React, { useContext } from 'react';
import { Providers } from '../context/Provider';


const Favorites = () => {
  const { liked } = useContext(Providers);

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
        {liked.map(data => (
          <div key={data.id} className="photo-card">
            <img src={data.src.medium} alt={data.alt} />
            <div className="photo-alt-text">{data.alt}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
