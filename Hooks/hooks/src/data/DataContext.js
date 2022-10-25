import React from "react";

export const data = {
    number: 123, 
    text: "Context API..."
}

const DataContext = React.createContext(data) //objeto de contexto

export default DataContext