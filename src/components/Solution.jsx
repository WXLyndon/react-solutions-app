import React, { Component } from "react";

class Solution extends Component {
  state = {
    solutions: [
      { key: 10, number: 1164, title: "Utilities1", views: 2930 },
      { key: 11, number: 1165, title: "Utilities2", views: 2931 },
      { key: 12, number: 1166, title: "Utilities3", views: 2932 },
      { key: 13, number: 1167, title: "Utilities4", views: 2933 },
      { key: 14, number: 1168, title: "Utilities5", views: 2934 },
      { key: 15, number: 1169, title: "Utilities6", views: 2935 },
      { key: 16, number: 1170, title: "Utilities7", views: 2936 },
      { key: 17, number: 1171, title: "Utilities8", views: 2937 },
    ],
  };

  handleDelete = (s) => {
    const solutions = this.state.solutions.filter((solution) => solution !== s);
    this.setState({ solutions });
  };

  render() {
    if (this.state.solutions.length === 0) {
      return <p>No solutions anymore!</p>;
    }

    return (
      <table className="table table">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Views</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {this.state.solutions.map((solution) => (
            <tr key={solution.key}>
              <td>{solution.number}</td>
              <td>{solution.title}</td>
              <td>{solution.views}</td>
              <td>
                <button
                  onClick={() => this.handleDelete(solution)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Solution;
