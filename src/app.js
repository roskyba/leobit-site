class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: props.options
    }
  }

  handleAddOption(option) {
    if(!option) {
      return 'Enter a valid value to add'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }
    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option)
      }
    });
  }

  handlePick() {
    const option = Math.floor(Math.random() * this.state.options.length)
    const item = this.state.options[option];
    console.log(item)
  }

  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      }
    })
  }

  render() {
    const subtitle = 'Put your life in a hand of a comp';
    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          handlePick={this.handlePick}
          hasOptions={this.state.options.length > 0}
        />
        <Options
          handleDeleteOptions={this.handleDeleteOptions}
          options={this.state.options}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
}

const Header = (props) => {
    return (
      <div>
        <h1>Indesicion {props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
      </div>
    );
}

Header.defaultProps = {
  title: 'Indecision'
}

const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >What should I do?</button>
    </div>
  )
}

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove all</button>
      {props.options.length != 0 && props.options.map((option) => <Option option={option} key={option}>{option}</Option>)}
    </div>
  );
}

const Option = (props) => {
  return (
    <div>
      <p>{props.option}</p>
    </div>
  );
}

class AddOption extends React.Component {
  constructor(props) {
    super(props)
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.state = {
      error: undefined
    }
  }
  onFormSubmit(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option)
    this.setState(() => {
     return {
      error
     }
    });
    e.target.elements.option.value = '';
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onFormSubmit}>
          <input type='text' name='option' placeholder='Add option here' />
          <button>Add option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp options={['gg','rr','ww']} />, document.getElementById('app'));