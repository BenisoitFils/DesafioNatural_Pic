import React, { useContext } from 'react';
import { Providers } from '../context/Provider'; // Use the correct named export
import IconHeart from './IconHeart';

const Gallery = () => {
    const { data, toggleliked } = useContext(Providers); // Use 'data' instead of 'datas'

    return (
        <div className="gallery grid-columns-5 p-3">
            {data.map((photo) => (
                <div key={photo.id} className="photo-card">
                    <img src={photo.src.medium} alt={photo.alt} />
                    <button className="icon-heart-btn" onClick={() => toggleliked(photo.id)}>
                        <IconHeart filled={photo.liked} />
                    </button>
                    <div className="photo-alt-text">{photo.alt}</div>
                </div>
            ))}
        </div>
    );
};

export default Gallery;
