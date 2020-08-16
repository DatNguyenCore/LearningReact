import React, { Component } from "react";

class Counter extends Component {
  // constructor() {
  //   super();

  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  state = {
    count: 0,
    tags: ["tag 1", "tag 2", "tag 3"],
  };

  formatCount() {
    const { count } = this.state;

    return count === 0 ? "Zero" : count;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  renderTags() {
    const { tags } = this.state;
    if (tags.length) {
      return <p>Three are no tags</p>;
    }

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {/* {this.renderTags()} */}
      </div>
    );
  }
}

export default Counter;
