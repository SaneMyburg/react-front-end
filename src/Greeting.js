import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchGreeting } from './redux/greeting/greetingsSlice';

function Greetings() {
  const dispatch = useDispatch();
  const { greeting } = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, []);

  return (
    <div>
      <div>
        <h1>Random Greeting:</h1>
        <h3>{greeting}</h3>
      </div>
    </div>
  );
}

export default Greetings;
