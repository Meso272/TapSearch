import React, { Component } from "react";
import axios from "axios";

export class Index extends Component {
  state = {
    docs: ""
  };

  onIndex = e => {
    e.preventDefault();
    var payload = { data: this.state.docs };
    axios.post("http://127.0.0.1:8000/api/index", payload).then(res => {
      if (res.data["status"] === 1) {
        alert("Sucessfully indexed.");
        this.setState({ docs: "" });
      } else alert("Error. Index it again.");
    });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div>
        <form onSubmit={this.onIndex} style={{ display: "flex" }}>
          
          <input
            type="submit"
            value="IndexIt"
            className="btn"
            style={{ flex: "10", height: "200px" }}
          />
        </form>
      </div>
    );
  }
}

export default Index;
