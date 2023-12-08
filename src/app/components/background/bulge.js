import React, { useEffect, useRef, useState } from 'react'

const Bulge = () => {

    const bugleOne = useRef(null);
    const bugleTwo = useRef(null);
    const [size, setSize] = useState(1000); // Initial size

    const [location, setLocation] = useState(50);
    const [bgColorOne, setBgColorOne] = useState('rgba(0, 0, 255, 1)'); // Start with blue
    const [bgColorTwo, setBgColorTwo] = useState('rgba(144, 238, 144, 1)'); // Start with light green

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.pageYOffset;
            const pageHeight = document.documentElement.scrollHeight - window.innerHeight;

            const scrollRatio = scrollPosition / pageHeight;
            const newLocation = Math.round(50 - (scrollRatio * 100));

            // Interpolate from blue to light orange-red
            const redOne = Math.min(255, Math.round(255 * scrollRatio));
            const greenOne = Math.min(165, Math.round(165 * scrollRatio));
            const blueOne = Math.max(0, 255 - Math.round(255 * scrollRatio));
            const newColorOne = `rgba(${redOne}, ${greenOne}, ${blueOne}, 1)`;

            const newSize = 1000 + (scrollRatio * 200); // Adjust multiplier for more/less growth

            // Interpolate from light green to orange
            const redTwo = Math.min(255, 144 + Math.round(111 * scrollRatio));
            const greenTwo = Math.max(165, 238 - Math.round(73 * scrollRatio));
            const blueTwo = Math.max(0, 144 - Math.round(144 * scrollRatio));
            const newColorTwo = `rgba(${redTwo}, ${greenTwo}, ${blueTwo}, 1)`;

            setLocation(newLocation);
            setSize(newSize);
            setBgColorOne(newColorOne);
            setBgColorTwo(newColorTwo);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div
                ref={bugleOne}
                style={{
                    bottom: `${location}%`,
                    right: -500,
                    position: 'fixed',
                    zIndex: -99,
                    width: `${size}px`, // Dynamically updated size
                    height: `${size}px`, // Dynamically updated size
                    flexShrink: 0,
                    borderRadius: 904,
                    background: `radial-gradient(50% 50% at 50% 50%, ${bgColorOne} 0%, transparent 100%)`,
                    filter: 'blur(100px)'
                }}>
            </div>

            <div
                ref={bugleTwo}
                style={{
                    top: `${location}%`,
                    left: -500,
                    position: 'fixed',
                    zIndex: -99,
                    width: `${size}px`, // Dynamically updated size
                    height: `${size}px`, // Dynamically updated size
                    flexShrink: 0,
                    borderRadius: 875,
                    background: `radial-gradient(50% 50% at 50% 50%, ${bgColorTwo} 0%, transparent 100%)`,
                    filter: 'blur(100px)'
                }}>
            </div>
        </>
    )
}

export default Bulge;
