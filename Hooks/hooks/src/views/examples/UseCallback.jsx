import React from "react";
import { useCallback } from "react";
import { useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import UseCallbackButtons from "./useCallbackButtons";

const UseCallback = (props) => {
  const [count, setCount] = useState(0);

  const inc = useCallback(function inc(delta) {  //versao cache  ada, criada uma unica vez
    setCount(curr => curr + delta); //funcao callback
  }, [setCount]);

//   function inc(delta) {
//     setCount(count + delta);
//   }
  return (
    <div className="UseCallback">
      <PageTitle
        title="Hook UseCallback"
        subtitle="Retorna uma função memoizada!"
      />
      <div className="center">
        <span className="text">{count}</span>
        <UseCallbackButtons inc={inc} />
      </div>
    </div>
  );
};

export default UseCallback;
