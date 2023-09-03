import React, { useState, useEffect } from 'react'
import { SlideshowLightbox, initLightboxJS } from 'lightbox.js-react'
import 'lightbox.js-react/dist/index.css'

function GalleryLightbox({ images }) {
    useEffect(() => {
        initLightboxJS("FDF8-1097-58AE-7D26", "individual");
    }, []);
    return (
        <div>
            <SlideshowLightbox
                showThumbnails={true}
                className="columns-1 md:columns-2 lg:columns-3 lg:gap-10"
            >
                {
                    images.map((img, i) => (
                        <img
                            src={img.src}
                            alt={img.alt}
                            className="w-100 mb-5 border border-[1px] border-[#efefef]"
                            key={i.toString()}
                        />
                    ))
                }
            </SlideshowLightbox>
        </div>
    );
}

export default GalleryLightbox;