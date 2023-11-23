import { useContext } from 'react';
import './style.css';
import CalendarContext from '../../context/calendar.context';

const DayComponent = () => {
  const { setCreateEvent, currentDate, events } = useContext(CalendarContext);

  const click = (hour, clientX, clientY) => {
    const date = new Date(currentDate);
    date.setHours(hour);
    date.setMinutes(0);
    date.setSeconds(0);

    setCreateEvent({ date, clientX, clientY });
  };
  const key = `${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDate()}`; // => 2022-05-05
  const eventsToday = events[key] || [];

  return (
    <div className='content-wrapper day-wrapper '>
      {
        Array(24).fill(null)
          .map((_, index) => {
            return (
              <div className='hours-wrapper'>
                <div className='hours'>
                  <span>{index}:00</span>
                </div>
                <div
                  className='content'
                  onClick={(event) => click(index, event.clientX, event.clientY)}
                >
                  {
                    eventsToday.map(el => {
                      const hourWhenWasCreated = new Date(el.date).getHours();

                      if (hourWhenWasCreated === index) {
                        return (<div>{el.title}</div>);
                      }

                      return null;
                    })
                  }
                </div>
              </div>
            );
          })
      }
      <div className='hours-wrapper'>
        <div className='hours'>
          <span>24:00</span>
        </div>
        <div className='content'>
        </div>
      </div>
    </div>
  );
};

export default DayComponent;