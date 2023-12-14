import { useEffect, useRef } from "react";
import './style.css';

export const ScrollToBottomComponent = (props) => {
 const elementRef = useRef();
 useEffect(() => elementRef.current.scrollIntoView());
 return (
  <>
   {props.children}
   <div ref={elementRef} className="scroll-to-bottom" />
  </>
 );
};