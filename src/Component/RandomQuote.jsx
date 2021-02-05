import React, { useReducer, useEffect } from "react";
import {linkQuote} from '../constant'
import {initState , reducer} from '../reducer/index';
import {changeColor} from '../util/color'
import {CHANGE_QUOTE,GET_API} from '../action';

const RandomQuote=()=> {
  const [state, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    fetch(
      linkQuote
    )
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: GET_API, data: data.quotes });
      })
      .catch((error) => {
        console.error("Error:", error);
      });

  }, []);

  const color = changeColor();

  return (
    <div style={{ backgroundColor: color }} className="w-screen h-screen">
      <div className="quote_box bg-white absolute top-1/2 left-1/2 py-10 px-12 rounded-md">
        <div style={{ color: color }} className="quote_content text-3xl text-center">
          <i className="fas fa-quote-left"></i> {state.content}
        </div>
        <div
          style={{ color: color }}
          className="quote_author w-full pt-5 text-right text-base"
        >
          - {state.author}
        </div>
        <div>
          <button className="mt-8 w-10 h-10  ml-1 rounded" style={{ backgroundColor: color }}>
            <i className="fab fa-facebook-f"></i>
          </button>
          <button className="mt-8 w-10 h-10 ml-1 rounded" style={{ backgroundColor: color }}>
            <i className="fab fa-twitter"></i>
          </button>
          <button
            className="float-right px-5 py-2 h-10 mt-8 ml-1 text-sm rounded"
            style={{ backgroundColor: color }}
            onClick={() => {
              dispatch({ type: CHANGE_QUOTE });
            }}
          >
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default RandomQuote;