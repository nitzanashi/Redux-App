import React, {useEffect, useState} from 'react';

const WindowWidth = () => {

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return() => {
          window.removeEventListener('resize', handleResize);
        };
    });

    return (
        <div>
            Width is: {width}
        </div>
    )
};

export default WindowWidth;

