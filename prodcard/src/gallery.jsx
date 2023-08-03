import React from 'react';

function Gallery ({src , alt}){
    return (
        <div>
            <img  width='200' height='257' src={src} alt = {alt}></img>
        </div>
    );
}
export default Gallery;