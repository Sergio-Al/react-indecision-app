class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      isVisible: false,
    };
  }
  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        isVisible: !prevState.isVisible,
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.isVisible ? "Hide Details" : "Show Details"}
        </button>
        {this.state.isVisible && <p>This is Visible</p>}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));  

// logic for our program
// let isVisible = false;

// const changeVisibility = () => {
//   isVisible = !isVisible;
//   render();
// };

// const appRoot = document.getElementById("app");

// const render = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={changeVisibility}>
//         {isVisible ? "Hide Details" : "Show Details"}
//       </button>
//       {isVisible && (
//         <div>
//           <p>this is my details</p>
//         </div>
//       )}
//     </div>
//   );

//   ReactDOM.render(template, appRoot);
// };

// render();
