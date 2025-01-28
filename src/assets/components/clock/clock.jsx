import React, { useState, useEffect } from 'react';
import './clock.css';

function DigitalClock() {
    const [time, setTime] = useState(new Date()); // Initialize with the current time

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date()); // Update the time every second
        }, 1000);

        return () => clearInterval(intervalId); // Cleanup the interval when the component unmounts
    }, []); // Empty dependency array ensures this effect runs once, when the component mounts

    function formatTime(time) {
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        const meridian = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12 || 12; // Convert to 12-hour format

        const twentyFourHour = `${padZero(time.getHours())}:${padZero(time.getMinutes())}:${padZero(time.getSeconds())}`; // 24-hour format
        const twelveHour = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridian}`; // 12-hour format

        // Use localStorage to get the time format preference
        const timeFormat = localStorage.getItem('format') || '24-hour'; // Default to '24-hour' if not found
        return timeFormat === '24-hour' ? twentyFourHour : twelveHour; // Return the formatted time
    }

    function padZero(number) {
        return number < 10 ? `0${number}` : number; // Adds leading zero if number is less than 10
    }

    return (
        <div className='clock-container'>
            <div className='clock'>
                {formatTime(time)} {/* Display formatted time */}
            </div>
        </div>
    );
}

export default DigitalClock;
