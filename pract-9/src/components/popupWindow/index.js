import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import CalendarContext from '../../context/calendar.context';

const PopupWindowComponent = () => {

 const { createEvent, setCreateEvent } = useContext(CalendarContext);

 if (!createEvent) {
  return null;
 }

 const top = createEvent.clientY;
 const left = createEvent.clientX;

 const click = () => {
  setCreateEvent(null);
 };

 const date = createEvent.date.toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

 return (
  <div className='popup-window-wrapper' style={{ top, left }}>
   <FontAwesomeIcon icon={faClose} id="popup-close" onClick={click} />
   <div>
    <div>{date}</div>
    <div id='popup-title'>Title: <input type='text' /></div>
    <div id='popup-description'>
     Description:
     {/* <input type='text' /> */}
     <textarea></textarea>
    </div>
   </div>
   <button>save</button>
  </div>
 );
};

export default PopupWindowComponent;
