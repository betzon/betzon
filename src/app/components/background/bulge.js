"use client"
import { usePathname } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'

const Bulge = () => {
    const pathname = usePathname()
    const bugleOne = useRef(null);
    const bugleTwo = useRef(null);
    const [size, setSize] = useState(1000); // Initial size
    const whiteList = ['/help-center']
    const [location, setLocation] = useState(50);
    // Initialize with dark blue
    const [bgColorOne, setBgColorOne] = useState('rgba(0, 8, 18, 1)');
    const [bgColorTwo, setBgColorTwo] = useState('rgba(0, 8, 18, 1)');


    useEffect(() => {
        const handleScroll = () => {
            if (typeof window !== "undefined") {
                const scrollPosition = window.pageYOffset;
                const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
                const scrollRatio = scrollPosition / pageHeight;

                const newLocation = Math.round(50 - (scrollRatio * 100));

                // Interpolate from dark blue to light blue
                const interpolate = (start, end) => Math.round(start + (end - start) * scrollRatio);
                const red = interpolate(0, 0);
                const green = interpolate(8, 131);
                const blue = interpolate(18, 231);

                const newColor = `rgba(${red}, ${green}, ${blue}, 1)`;

                const newSize = 1000 + (scrollRatio * 200);

                setLocation(newLocation);
                setSize(newSize);
                setBgColorOne(newColor);
                setBgColorTwo(newColor); // Use the same color for both, or adjust as needed
            }
        };

        if (typeof window !== "undefined") {
            window.addEventListener('scroll', handleScroll);
        }
        return () => {
            if (typeof window !== "undefined") {
                window.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    useEffect(() => {
        console.log(pathname)
    }, []);

    return (
        <>
            {
                !whiteList.includes(pathname) ?
                    <>
                        < div
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
                            }
                            }>
                        </div >

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
                    : ''
            }
        </>
    )
}

export default Bulge;
