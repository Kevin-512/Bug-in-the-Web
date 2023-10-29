import React, { useState, useEffect, useMemo } from 'react';

const DateFlipper = () => {
  const currentDate = useMemo(() => new Date(), []);
  const [year, setYear] = useState(currentDate.getFullYear());
  const [month, setMonth] = useState(currentDate.getMonth()+1);
  const [day, setDay] = useState(currentDate.getDate());
  const [dateText, setDateText] = useState("")

  function getYearRange(baseYear, size) {
    const result = [];
    for (let i = -size; i <= size; i++) {
      const year = baseYear + i
      result.push(year);
    }
    return result;
  }

  function getMonthRange(baseMonth, size) {
    const result = [];
    for (let i = -size; i <= size; i++) {
      const month = (baseMonth + i + 12) % 12 + 1; // Ensure month is between 1 and 12
      result.push(month);
    }
    return result;
  }

  function getDayRange(baseDay, size, maxDay) {
    const result = [];
    for (let i = -size; i <= size; i++) {
      const day = (baseDay + i + maxDay) % maxDay + 1;
      result.push(day);
    }
    return result;
  }
  
  const range = useMemo(() => {
    const maxDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    return {
      year: getYearRange(currentDate.getFullYear(), 3),
      month: getMonthRange(currentDate.getMonth() + 1, 3),
      day: getDayRange(currentDate.getDate(), 3, maxDay),
    };
  }, [currentDate]);

  const [yearIndex, setYearIndex] = useState(Math.floor(Math.random() * range.year.length));
  const [monthIndex, setMonthIndex] = useState(Math.floor(Math.random() * range.month.length));
  const [dayIndex, setDayIndex] = useState(Math.floor(Math.random() * range.day.length));

  const [isYearFixed, setIsYearFixed] = useState(false);
  const [isMonthFixed, setIsMonthFixed] = useState(false);
  const [isDayFixed, setIsDayFixed] = useState(false);

  const changeDate = (field) => {
    switch (field) {
      case 'year':
        setIsYearFixed(!isYearFixed);
        break;
      case 'month':
        setIsMonthFixed(!isMonthFixed);
        break;
      case 'day':
        setIsDayFixed(!isDayFixed);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    console.log("set interval");
    console.log(range);
    let yearInterval, monthInterval, dayInterval;

    // Clear and recreate year interval based on isYearFixed state
    if (!isYearFixed) {
      yearInterval = setInterval(() => {
        setYearIndex((prevIndex) => (prevIndex + 1) % range.year.length);
      }, 1000);
    } else {
      clearInterval(yearInterval);
    }

    // Clear and recreate month interval based on isMonthFixed state
    if (!isMonthFixed) {
      monthInterval = setInterval(() => {
        setMonthIndex((prevIndex) => (prevIndex + 1) % range.month.length);
      }, 1000);
    } else {
      clearInterval(monthInterval);
    }

    // Clear and recreate day interval based on isDayFixed state
    if (!isDayFixed) {
      dayInterval = setInterval(() => {
        setDayIndex((prevIndex) => (prevIndex + 1) % range.day.length);
      }, 1000);
    } else {
      clearInterval(dayInterval);
    }

    // Cleanup the intervals when the component unmounts
    return () => {
      clearInterval(yearInterval);
      clearInterval(monthInterval);
      clearInterval(dayInterval);
    };
  }, [isYearFixed, isMonthFixed, isDayFixed, range]);

  
  useEffect(() => {
    setYear(range.year[yearIndex]);
    setMonth(range.month[monthIndex]);
    setDay(range.day[dayIndex]);
  }, [yearIndex, monthIndex, dayIndex, range])

  const handleSubmit = () => {
    setDateText("Submitted Date " + year + " " + month + " " + day);
  };

  const cardStyle = {
    width: "60px",
    height: "60px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "24px",
    fontWeight: "bold",
    color: "white",
  }

  const CardFlipper = ({ value, fixed }) => {
    return (
      <div style={{ ...cardStyle, backgroundColor: fixed ? "#e74c3c" : "#3498db"}}>{value}</div>
    );
  };

  return (
    <div>
      <div style={{display: "flex", gap: "5px"}}>
        <CardFlipper value={year} fixed={isYearFixed} />
        <CardFlipper value={month} fixed={isMonthFixed} />
        <CardFlipper value={day} fixed={isDayFixed} />
      </div>
      <div>
        <button onClick={() => changeDate('year')}>{isYearFixed ? "Unlock Year" : "Lock Year"}</button>
        <button onClick={() => changeDate('month')}>{isMonthFixed ? "Unlock Month" : "Lock Month"}</button>
        <button onClick={() => changeDate('day')}>{isDayFixed ? "Unlock Day" : "Lock Day"}</button>
        <button onClick={handleSubmit} disabled={!isYearFixed || !isMonthFixed || !isDayFixed}>
          Submit
        </button>
        <p>
          {dateText}
        </p>
      </div>
    </div>
  );
};

export default DateFlipper;
