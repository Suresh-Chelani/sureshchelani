import { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
    const cursorOuterRef = useRef<HTMLDivElement>(null);
    const cursorInnerRef = useRef<HTMLDivElement>(null);
    const [isClicking, setIsClicking] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;

            if (cursorOuterRef.current && cursorInnerRef.current) {
                // Smooth follow for outer cursor
                cursorOuterRef.current.style.transform = `translate(${clientX}px, ${clientY}px) scale(${isClicking ? 0.8 : 1})`;

                // Instant follow for inner cursor
                cursorInnerRef.current.style.transform = `translate(${clientX}px, ${clientY}px)`;
            }
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        const handleMouseEnter = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.tagName.toLowerCase() === 'h1' ||
                target.tagName.toLowerCase() === 'h2' ||
                target.tagName.toLowerCase() === 'h3') {
                setIsHovering(true);
            }
        };

        const handleMouseLeave = () => {
            setIsHovering(false);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('mouseover', handleMouseEnter);
        document.addEventListener('mouseout', handleMouseLeave);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('mouseover', handleMouseEnter);
            document.removeEventListener('mouseout', handleMouseLeave);
        };
    }, [isClicking]);

    return (
        <>
            {/* Outer cursor */}
            <div
                ref={cursorOuterRef}
                className={`pointer-events-none fixed left-0 top-0 z-50 mix-blend-difference
                   ${isHovering ? 'scale-150' : ''}`}
                style={{
                    transition: 'transform 0.15s ease-out, width 0.15s ease-out, height 0.15s ease-out'
                }}
            >
                <div className={`relative -ml-4 -mt-4 h-8 w-8 rounded-full
                        ${isClicking ? 'scale-75' : ''}
                        ${isHovering ? 'bg-white scale-150' : 'border-2 border-white'}`}
                    style={{
                        transition: 'transform 0.15s ease-out, background 0.15s ease-out'
                    }}
                />
            </div>

            {/* Inner cursor */}
            <div
                ref={cursorInnerRef}
                className="pointer-events-none fixed left-0 top-0 z-50 mix-blend-difference"
            >
                <div className={`relative -ml-1 -mt-1 h-2 w-2 rounded-full bg-white
                        ${isClicking ? 'scale-50 opacity-50' : ''}
                        ${isHovering ? 'opacity-0' : ''}`}
                    style={{
                        transition: 'transform 0.1s ease-out, opacity 0.15s ease-out'
                    }}
                />
            </div>
        </>
    );
};

export default CustomCursor;