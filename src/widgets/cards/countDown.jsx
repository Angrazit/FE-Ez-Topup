import { useRef, useEffect, useState } from "react";

export function CountDown({seconds}){
    const [countdown, setCountdown] = useState(seconds)
    const timerId = useRef()

    useEffect(() => {
      timerId.current = setInterval(() => {
        setCountdown(prev => prev - 1)
      }, 1000);
      return () => clearInterval(timerId.current)
    }, [])

    return(
      <span>{countdown}</span>
    )
  }

export default CountDown;