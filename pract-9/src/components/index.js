import { useEffect, useState } from 'react';
import CalendarContext from '../context/calendar.context';
import './style.css';
import CurrentDateComponent from './currentDate';
import RadioComponent from './selector';
import MonthsComponent from './months';
import YearsComponent from './years';
import MonthComponent from './month';
import DayComponent from './day';
import PopupWindowComponent from './popupWindow';


function App () {

  // const currentDateHook = useState(new Date()); // => Array size 2
  // const currentDate = currentDateHook[0];
  // const setCurrentDate = currentDateHook[1]];
  const [currentDate, _setCurrentDate] = useState(new Date()); // => Array size 2
  const setCurrentDate = (callbackFunction) => {
    _setCurrentDate((prevDate) => {
      const newDate = callbackFunction(prevDate);
      localStorage.setItem("currentDate", newDate.toISOString());
      return newDate;
    });
  };

  const [events, setEvents] = useState({});

  const addEvent = (event) => {
    debugger;
    const { date } = event;
    const key = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`; // => 2022-05-05

    let eventsDataFromLocalStorage = localStorage.getItem('events');

    if (!eventsDataFromLocalStorage) {
      eventsDataFromLocalStorage = {};
    } else {
      eventsDataFromLocalStorage = JSON.parse(eventsDataFromLocalStorage);
    }

    if (eventsDataFromLocalStorage[key]) {
      eventsDataFromLocalStorage[key].push(event);
    } else {
      eventsDataFromLocalStorage[key] = [event];
    }

    localStorage.setItem('events', JSON.stringify(eventsDataFromLocalStorage));
    setEvents(eventsDataFromLocalStorage);
  };

  /**
   * [] -- викликається тільки 1 раз коли елемент відмалюється на екрані
   */
  useEffect(() => {
    const date = localStorage.getItem("currentDate");
    if (date) {
      _setCurrentDate(new Date(date));
    }

    let eventsDataFromLocalStorage = localStorage.getItem('events');

    if (!eventsDataFromLocalStorage) {
      eventsDataFromLocalStorage = {};
    } else {
      eventsDataFromLocalStorage = JSON.parse(eventsDataFromLocalStorage);
    }

    setEvents(eventsDataFromLocalStorage);
  }, []);

  const [selectedPeriod, _setSelectedPeriod] = useState('years');

  const setSelectedPeriod = (callbackFunction) => {
    _setSelectedPeriod(callbackFunction);
  };

  let content = null;

  switch (selectedPeriod) {
    case 'years': {
      content = <YearsComponent />;
      break;
    }
    case 'months': {
      content = <MonthsComponent />;
      break;
    }
    case 'month': {
      content = <MonthComponent />;
      break;
    }
    case 'day': {
      content = <DayComponent />;
      break;
    }
    default: {
      content = null;
    }
  }

  const [createEvent, _setCreateEvent] = useState(null);
  const setCreateEvent = (callbackFunction) => _setCreateEvent(callbackFunction);



  return (
    <div className="App">
      <CalendarContext.Provider value={{
        events,
        addEvent,
        createEvent,
        currentDate,
        setSelectedPeriod,
        setCurrentDate,
        setCreateEvent
      }}>
        <PopupWindowComponent />
        <header>
          <CurrentDateComponent />

          <RadioComponent keyName='years' title='years' />
          <RadioComponent keyName='months' title='months' />
          <RadioComponent keyName='month' title='month' />
          <RadioComponent keyName='day' title='day' />
        </header>

        {content}
      </CalendarContext.Provider >
    </div>
  );
}

export default App;
