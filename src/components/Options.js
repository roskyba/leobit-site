import React from 'react';
import Option from './Option';

const Options = (props) => (
  <div>
    <button onClick={props.handleDeleteOptions}>Remove all</button>
    {props.options.length === 0 && (<p>Please add some options</p>)}
    {props.options.length != 0 && props.options.map((option) => (
      <Option
        handleDeleteOptionSingular={props.handleDeleteOptionSingular}
        option={option}
        key={option}
      >{option}</Option>)
    )}
  </div>
)

export default Options;