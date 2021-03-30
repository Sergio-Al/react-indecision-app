// logic for our program
let isVisible = false;

const changeVisibility = () => {
  isVisible = !isVisible;
  render();
};

const appRoot = document.getElementById("app");

const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={changeVisibility}>
        {isVisible ? "Hide Details" : "Show Details"}
      </button>
      {isVisible && (
        <div>
          <p>this is my details</p>
        </div>
      )}
    </div>
  );

  ReactDOM.render(template, appRoot);
};

render();
