const app = {
  title: 'Visibility toggle',
  visible: false
};

const appRoot = document.getElementById('app');

const onShowDetails = () => {
  app.visible = !app.visible;
  render();
}

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <button onClick={onShowDetails}>{app.visible ? 'Hide details' : 'Show details'}</button>
      {app.visible && <p>There are you details</p>}
    </div>
  );
  ReactDOM.render(template, appRoot);
}

render();