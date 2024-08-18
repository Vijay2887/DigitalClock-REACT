import { useEffect, useState } from "react";

function DigitalClock(){

    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, []);

    function clock(){
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        let meredian = hours > 12 ? "P.M" : "A.M";
        hours = hours > 12 ? hours % 12 : hours;
        
        return(`${hours.toString().padStart(2,"0")}:${minutes.toString().padStart(2,"0")}:${seconds} ${meredian}`);
    }


    return(
        <div className="clock-container">
            <span>{clock()}</span>
        </div>
    );


}

export default DigitalClock;