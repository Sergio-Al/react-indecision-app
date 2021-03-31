class IndecisionApp extends React.Component {
  render() {
    const title = "Indecision App";
    const subtitle = "Put your life in the hands of a computer!";
    const options = ["thing one", "thing two", "thing four"];

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handlePick() {
    alert("HandlePick");
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should i do?</button>
      </div>
    );
  }
}

// Options
class Options extends React.Component {
  constructor(props) /* use constructor *Recommended for avoid context issues working with props and functions in JS */{
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  handleRemoveAll() {
    console.log(this.props.options);
  }
  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
        <p>Here are your options</p>
        {this.props.options.map((option) => (
          <Option key={option} optionText={option} />
        ))}
      </div>
    );
  }
}

// Option -> Option component here
class Option extends React.Component {
  render() {
    return <div>{this.props.optionText}</div>;
  }
}

// Add option
class AddOption extends React.Component {
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    if (option) {
      alert("Are you sure to add " + option);
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"></input>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
