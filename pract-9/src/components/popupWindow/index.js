import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { useContext, useRef } from 'react';
import CalendarContext from '../../context/calendar.context';

/**
 * {
 *   "2022-05-05": [
 *      { title, description, date: "2022-05-05T13:00:00"},
 *      { title, description, date: "2022-05-05T16:00:00"}
 *   ],
 *   "2022-05-06": [
 *      { title, description, date: "2022-05-06T13:00:00"}
 *   ],
 * }
 */

const PopupWindowComponent = () => {

 const { createEvent, setCreateEvent, addEvent } = useContext(CalendarContext);

 const inputRef = useRef();
 const textareaRef = useRef();

 if (!createEvent) {
  return null;
 }

 const top = createEvent.clientY;
 const left = createEvent.clientX;

 const click = () => {
  setCreateEvent(null);
 };

 const date = createEvent.date.toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

 const save = () => {

  const title = inputRef.current.value;
  const description = textareaRef.current.value;

  addEvent({
   date: createEvent.date,
   title,
   description,
  });

  click();
 };

 return (
  <div className='popup-window-wrapper' style={{ top, left }}>
   <FontAwesomeIcon icon={faClose} id="popup-close" onClick={click} />
   <div>
    <div>{date}</div>


    <div id='popup-title'>Title: <input ref={inputRef} type='text' /></div>
    <div id='popup-description'>
     Description:
     {/* <input type='text' /> */}
     <textarea ref={textareaRef}></textarea>
    </div>
   </div>
   <button onClick={save}>save</button>
  </div>
 );
};

export default PopupWindowComponent;
