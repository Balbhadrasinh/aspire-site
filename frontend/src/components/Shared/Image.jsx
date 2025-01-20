import React from 'react';
import Image from "next/image";

const Images = ({ src, alt, width, height, className, fill, sizes, priority }) => {
    const myLoader = ({ src, width, quality }) => {
        return `${process.env.STRAPI_API}${src}?w=${width}&q=${quality || 75}`
    }
    return (
        <>
            {
                fill ? 
                    <Image
                        loader={myLoader}
                        src={src}
                        alt={alt || 'Aspire Softserv'}
                        className={`my-custom-image object-cover ${className}`}
                        blurDataURL
                        sizes={sizes}
                        fill
                        priority={priority}
                    /> :
                    <Image
                        loader={myLoader}
                        src={src}
                        alt={alt || 'Aspire Softserv'}
                        width={width || "400"}
                        height={height || "150"}
                        className={`my-custom-image ${className}`}
                        blurDataURL
                        sizes={sizes}
                        priority={priority}
                    />
            }
        </>
    )
}

export default Images;
