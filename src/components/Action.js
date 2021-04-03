import React from "react";

// function stateless component
const Action = (props) => (
  <div>
    <button onClick={props.handlePick} disabled={!props.hasOptions}>
      What should i do?
    </button>
  </div>
);

export default Action;
