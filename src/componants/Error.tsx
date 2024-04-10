import React from "react"; 
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err: any = useRouteError();
  return (
    <div>
      <h1>Oops!!!</h1>
      <h2> something went wrong!</h2>
      <p>{err.status} {err.statusText}</p>
      <p>{err.data}</p>
    </div>
  )
}

export default Error