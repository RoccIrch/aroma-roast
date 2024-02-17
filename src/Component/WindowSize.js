import { createContext, useContext, useState, useEffect } from "react";

const WindowSizeContext = createContext();

export const WindowSize = ({ children }) => {
    const [widowSize, setWindowSize] = useState({
        width : typeof window !== 'undefined' ? window.innerWidth : 0,
        height : typeof window !== 'undefined' ? window.innerHeight : 0,
    });
    
    const handleResize = () => {
        setWindowSize({
            width : window.innerWidth,
            height : window.innerHeight,
        });
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize); 
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <WindowSizeContext.Provider value={WindowSize}>
            {children}
        </WindowSizeContext.Provider>
    );
}

export const useWindowSize = () => {
    return useContext(WindowSizeContext);
}