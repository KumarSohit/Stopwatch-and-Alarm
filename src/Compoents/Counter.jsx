
// import { useEffect, useState } from 'react';

// const Counter = () => {

//  const [second, setSecond] = useState(0);
//  const [Minutes, setMinutes] = useState(0);
//  const [hours, setHours] = useState(0);
//  const [id, setId] = useState(0);
//  const [stop, setStop] = useState(false);


//  useEffect(() => {

//       if (stop) {

//         setId(setInterval(() => {

//     setSecond((second) => second + 1);
//    }, 1000));

//   }

//  }, [stop]);


//  useEffect(() => {

//   if (second > 59) {

//    setMinutes((Minutes) => Minutes + 1);
//    setSecond(0);
//   }

//  }, [second]);

//  useEffect(() => {


//   if (Minutes >= 59 && second > 59) {
//    setHours((hours) => hours + 1);
//    setMinutes(0);
//    setSecond(0);
//   }

//  }, [Minutes, second])



// const handleStart = () => {

//  setStop(true);
// }

// const handleStop = () => {

//  clearInterval(id);
//  setStop(false);
// }

// const handlereset = () => {

//  setMinutes(0);
//  setHours(0);
//  setSecond(0);
//  setStop(false);
//  clearInterval(id);
// }
// return(<div className='main-container'>

//      <div className="container">
 
//     {(hours<10)?"0"+hours:hours}:{(Minutes<10)?"0"+Minutes:Minutes}:{(second<10)?"0"+second:second}

//      </div>
// <div className='button'>

//  <button onClick={handleStart}>Start</button>
//  <button onClick={handleStop}>Stop</button>
//  <button onClick={handlereset}>Reset</button>


// </div>


//     </div>

// );

// }

// export default Counter;


import { useEffect, useState } from 'react';

const Counter = () => {

 const [second, setSecond] = useState(0);
 const [Minutes, setMinutes] = useState(0);
 const [hours, setHours] = useState(0);
 const [id, setId] = useState(0);
 const [stop, setStop] = useState(false);


 useEffect(() => {

      if (stop) {

        setId(setInterval(() => {

    setSecond((second) => second + 1);
   }, 1000));

  }

 }, [stop]);


 useEffect(() => {

  if (second > 59) {

   setMinutes((Minutes) => Minutes + 1);
   setSecond(0);
  }

 }, [second]);

 useEffect(() => {


  if (Minutes >= 59 && second > 59) {
   setHours((hours) => hours + 1);
   setMinutes(0);
   setSecond(0);
  }

 }, [Minutes, second])



const handleStart = () => {

 setStop(true);
}

const handleStop = () => {

 clearInterval(id);
 setStop(false);
}

const handlereset = () => {

 setMinutes(0);
 setHours(0);
 setSecond(0);
 setStop(false);
 clearInterval(id);
}
return(<div className='main-container'>

     <div className="container">
 
    {(hours<10)?"0"+hours:hours}:{(Minutes<10)?"0"+Minutes:Minutes}:{(second<10)?"0"+second:second}

     </div>
<div className='button'>

 <button onClick={handleStart}>Start</button>
 <button onClick={handleStop}>Stop</button>
 <button onClick={handlereset}>Reset</button>


</div>


    </div>

);

}

export default Counter;

















