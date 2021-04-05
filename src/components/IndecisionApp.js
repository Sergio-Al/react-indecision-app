import React from "react";
// we are not importing .js for components because webpack manage that for us.
import AddOption from "./AddOption";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import OptionModal from "./OptionModal";

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined,
  };
  handleDeleteOption = (option) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((o) => option !== o),
    }));
  };
  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    this.setState(() => ({ selectedOption: this.state.options[randomNum] }));
  };
  handleDeleteSelected = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };
  handleAddOption = (option) => {
    if (!option) {
      return "Enter valid value to add item!";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    }

    this.setState((prevState) => ({
      options: prevState.options.concat(option),
    }));
  };
  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      // Do nothing at all
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }
  componenWilUnmount() {
    console.log("component will unmount!");
  }
  render() {
    const subtitle = "Put your life in the hands of a computer!";

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
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
          />
          <AddOption handleAddOption={this.handleAddOption} />
          </div>
        
        </div>
        <OptionModal
          deleteSelected={this.handleDeleteSelected}
          selectedOption={this.state.selectedOption}
        />
      </div>
    );
  }
}
