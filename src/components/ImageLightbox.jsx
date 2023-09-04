import React, { useEffect } from 'react';
import 'lightbox.js-react/dist/index.css'
import { Image, initLightboxJS } from 'lightbox.js-react'


function ImageLightbox({ imgSrc, imgAlt, aspectRatio }) {
    useEffect(() => {
        initLightboxJS("FDF8-1097-58AE-7D26", "individual");
    }, []);
    return (
        <div className={`${aspectRatio === "aspect-square" ? "ArtWorkTest" : ""} border border-solid border-[#efefef] overflow-hidden relative ${aspectRatio}`}>
            <Image
                theme="night"
                image={{ src: imgSrc, title: imgAlt }}
            />
            <span className="absolute bottom-0 left-0 bg-accentPurple px-4 py-2 text-white font-serif">Click image to open gallery</span>
        </div>
  );
}

export default ImageLightbox;