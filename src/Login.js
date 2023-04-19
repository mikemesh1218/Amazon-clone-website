import React from "react";
import StateProvider from "./StateProvider";
import {useContext} from 'react'

export default function Login(){
  const context = useContext(StateProvider)
  function updateContextState (){
    context.setNameContext("Hey Mike you made it. Thanks to God")
  }
  
  return(
    <div>
      <h1>
        This is login {context.nameContext}
      </h1>
      <button onClick={updateContextState}>update context State</button>
    </div>

  )
}