console.log("App js is running!");

const app = {
  title: "Indecision App Remote",
  subtitle: "This is the subtitle for the indecision app",
  options: [],
};

// functions
const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    render();
  }
};

const onRemoveAll = () => {
  app.options = [];
  render();
}

// Assignment to html
const appRoot = document.getElementById("app");

const numbers = [55, 101, 1000];
// JSX - Javascript XML file

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
      <p>{app.options.length}</p>
      {/* {
        numbers.map((number) => <p key={number}>Number: {number}</p>)
      } */}
      <ol>
        {app.options.map((option) => <li key={option}>{option}</li>)}
      </ol>
      <button onClick={onRemoveAll}>RemoveAll</button>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

// Render the app to div app
render();
