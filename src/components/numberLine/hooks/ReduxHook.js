import {useEffect, useRef, useState} from 'react';


export const ReduxHook = (
    {
      number,
      reduxFieldValue,
      handlerClick,
    },
) => {
  const wrapperRef = useRef(null);
  const scrollRef = useRef(null);
  const [stateLine, setStateLine] = useState(false);
  const handlerStateLine = () => {
    setStateLine(!stateLine);
  };
  const handlerClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setStateLine(false);
    }
  };
  useEffect(() => {
    // Bind the event listener
    document.addEventListener('mousedown', handlerClickOutside);


    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handlerClickOutside);
    };
  }, []);

  useEffect(() => {
    handlerClick(stateLine);
    if (scrollRef.current) {
      const widthLine = scrollRef.current.getScrollWidth();
      const widthItemLine = widthLine / Math.ceil(number / 10);
      const howMuch = reduxFieldValue - 2 > 0 ? reduxFieldValue - 2 : 0;
      const scrollLeftTo = widthItemLine * howMuch;
      scrollRef.current.scrollLeft(
          scrollLeftTo,
      );
    }
  }, [stateLine]);
  return {
    stateLine,
    handlerStateLine,
    wrapperRef,
    scrollRef,
  };
};
