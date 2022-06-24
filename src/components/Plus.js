import React, { useCallback } from 'react';
import { useState } from 'react';

  const Counter = () => {
  const [value, setValue] = useState(0)

  const plus =useCallback(()=>{
      setValue(value+1);
    },[value]) //디펜던시에 의존적이기 때문에 []에 값을 지정해주면 함수를 새로 만든다.

    const resetPlus = useCallback(() => {
      setValue(0);
    },[]) // 해당 버튼을 누르면 값이 무조건 0으로 리셋된다

    return (
        <div>
         <h1> 값 : {value}</h1>
            <button onClick={plus}>
                plus +
            </button>
            <button onClick={resetPlus}>
              reset
            </button>
      </div>
    );
};

export default Counter;
