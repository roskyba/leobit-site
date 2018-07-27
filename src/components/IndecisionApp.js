import React from 'react';
import Header from './Header';
import Action from './Action';
import AddOption from './AddOption';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  }
  handleAddOption = (option) => {
    if (!option) {
      return 'Enter a valid value to add'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }
    this.setState((prevState) => ({ options: prevState.options.concat(option) }));
  }

  handlePick = () => {
    const optionNum = Math.floor(Math.random() * this.state.options.length)
    const item = this.state.options[optionNum];
    this.setState({ selectedOption: item });
  }

  handleClearSelectedOption = () => {
    this.setState({ selectedOption: undefined })
      ;
  }

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }))
  }

  handleDeleteOptionSingular = (option) => {
    this.setState((prevState) => ({ options: prevState.options.filter((item) => option !== item) }));
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);


      if (options) {
        this.setState(() => ({ options }))
      }

    } catch (e) {
      //do nothing
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length != this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json);
    }
  }

  render() {
    const subtitle = 'Put your life in a hand of a comp';
    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action
            handlePick={this.handlePick}
            hasOptions={this.state.options.length > 0}
          />
          <div className="widget">
            <Options
              handleDeleteOptionSingular={this.handleDeleteOptionSingular}
              handleDeleteOptions={this.handleDeleteOptions}
              options={this.state.options}
            />
            <AddOption
              handleAddOption={this.handleAddOption}
            />
          </div>
        </div>
        <OptionModal
          handleClearSelectedOption={this.handleClearSelectedOption}
          selectedOption={this.state.selectedOption}
        />
      </div>
    );
  }
}