import React,{useState} from "react";

import { Transition } from 'react-transition-group';

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:  { opacity: 0 },
};

 
export default function Test() {
    const [inProp, setInProp] = useState(false);
    return (
      <div>
        <Transition in={inProp} timeout={500}>
            {state=>{
                console.log(state)
                return <h1 style={{
                    ...defaultStyle,
                    ...transitionStyles[state]
                }}>认为确认</h1>
            }}
        </Transition>
        <button onClick={() => setInProp(!inProp)}>
          Click to Enter
        </button>
      </div>
    );
  }