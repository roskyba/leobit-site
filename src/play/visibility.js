class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      title: 'Visibility toggle',
    }
    this.onShowDetails = this.onShowDetails.bind(this)
  }

  onShowDetails() {
    this.setState((prevState) => {
      return {
        visible: !this.state.visible
      }
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <button onClick={this.onShowDetails}>{app.visible ? 'Hide details' : 'Show details'}</button>
        {this.state.visible && <p>There are you details</p>}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))
// const app = {
//   title: 'Visibility toggle',
//   visible: false
// };

// const appRoot = document.getElementById('app');

// const onShowDetails = () => {
//   app.visible = !app.visible;
//   render();
// }

// const render = () => {
//   const template = (
//     <div>
//       <h1>{app.title}</h1>
//       <button onClick={onShowDetails}>{app.visible ? 'Hide details' : 'Show details'}</button>
//       {app.visible && <p>There are you details</p>}
//     </div>
//   );
//   ReactDOM.render(template, appRoot);
// }

// render();