import React from 'react';
import Option from './Option';

const Options = (props) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title ">Your options</h3>
      <button
        onClick={props.handleDeleteOptions}
        className="button button--link"
      >Remove all</button>
    </div>
    {props.options.length === 0 && (<p className="widget__option__message">Please add some options</p>)}
    {props.options.length != 0 && props.options.map((option, index) => (
      <div className="widget__option">
        <Option
          count={index + 1}
          className="widget__option"
          handleDeleteOptionSingular={props.handleDeleteOptionSingular}
          option={option}
          key={option}
        >{option}</Option>
      </div>
    )
    )}
  </div>
)

export default Options;