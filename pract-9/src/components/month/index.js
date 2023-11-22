import { useContext, useState } from 'react';
import { MONTHS } from '../shared/months';
import './style.css';
import CalendarContext from '../../context/calendar.context';

const WEEK_DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function getDaysInMonth (year, month) {
  return new Date(year, month + 1, 0).getDate();
}

const MonthComponent = () => {
  const { currentDate, setCurrentDate } = useContext(CalendarContext);

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const days = getDaysInMonth(currentYear, currentMonth);

  // const dayComponents = [];
  // for (let i = 1; i <= days; i += 1) {
  //   const date = new Date(currentDate);
  //   date.setDate(i);
  //   const dayOfWeek = date.getDay() + 1;
  //   dayComponents.push(
  //     <div
  //       style={{ "--day-col-start": dayOfWeek }}
  //       className='content-item day'
  //     >{i}</div>
  //   );
  // }

  const click = (day) => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(day);
      return newDate;
    });
  };

  return (
    <div className='content-wrapper month-wrapper'>
      <div className='header'>{MONTHS[currentMonth]}</div>
      {
        WEEK_DAYS.map(day => (<div className='day-name'>{day}</div>))
      }
      {/* {dayComponents} */}
      {
        Array(days).fill(null)
          .map((el, index) => {
            const date = new Date(currentDate);
            date.setDate(index + 1);
            const dayOfWeek = date.getDay() + 1;
            return (
              <div
                onClick={() => click(index + 1)}
                style={{ "--day-col-start": dayOfWeek }}
                className='content-item day'
              >{index + 1}</div>
            );
          })
      }
    </div>
  );
};

export default MonthComponent;