const app = {
  title: "Indecision app",
  subtitle: "Put your life in a hand of a computer",
  options: []
}

const appRoot = document.getElementById('app');

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value.trim();
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderPage();
  }
}

const onRemoveAll = () => {
  app.options = [];
  renderPage();
}

const onMakeDecision = () => {
  const ranNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[ranNum];
  console.log(option);
}

const numbers = [43,5,14,5000];

const renderPage = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ?  'Here are your options' : 'No options provided'}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What to do</button>
      <button onClick={onRemoveAll}>Remove All</button>
      <ol>
        {app.options.map((item) => <li key={item}>{item}</li>)}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type='text' name='option' />
        <button>Add option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
}

renderPage();