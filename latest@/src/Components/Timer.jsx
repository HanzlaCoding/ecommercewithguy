import * as React from "react";

const Timer = (props) => {
  const [seconds, setSeconds] = React.useState(2);
  const [minutes, setMinutes] = React.useState(2);
  const [hours, setHours] = React.useState(2);
  const [days, setDays] = React.useState(4);
  const [timeDone, setDone] = React.useState(false);
 //SECONDS

  //seconds 60 -> 0
  React.useEffect(() => {
    const secondsCounter =
      seconds > 0 && setInterval(() => setSeconds(seconds - 1), 1000);
    return () => clearInterval(secondsCounter);
  }, [seconds]);

  //seconds == 60 (when seconds == 0)
  React.useEffect(() => {
    return () => setSeconds(2);
  }, [seconds == 0 && !timeDone ]);

//MINUTES

  //Minutes 60 -> 0  (when seconds == 0)
  React.useEffect(() => {
    return () => setMinutes(minutes-1)
  }, [seconds == 0]);

  //Minutes == 60 (when minutes == 0)
  React.useEffect(() => {
    return () => setMinutes(2);
  }, [minutes == 0 && !timeDone]);

//HOURS

  //hours 24 => 0 (when minutes == 0)
  React.useEffect(() => {
    return () => setHours(hours - 1);
  }, [minutes == 0]);

  //hours == 23 (when hours == 0)
  React.useEffect(() => {
    return () => setHours(2);
  }, [hours == 0 && !timeDone]);

//DAYS
  //days 5 => 0 (when hours == 0)
  React.useEffect(() => {
      return () => setDays(days-1);
  }, [hours == 0 && !timeDone])

//DONE

  React.useEffect(() => {
      return () => setDone(true)
  }, [days == 0 && hours == 0 && minutes == 0 && seconds == 0])


  return (
    <div>
      <p>
        days: {days} : hours : {hours} : minutes : {minutes} : seconds : {seconds}
      </p>
    </div>
  );
};
export default Timer;