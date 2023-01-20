import React from "react";
import { PersonType } from "../types/person";

type PersonProps = PersonType;

type PersonState = {
  wishes: number;
};
class Person extends React.Component<PersonProps, PersonState> {
  constructor(props: PersonProps) {
    super({} as any);
    this.state = { wishes: 1 };
    this.increaseClickHanlder = this.increaseClickHanlder.bind(this);
    this.decreaseClickHanlder = this.decreaseClickHanlder.bind(this);
    console.log("Here is the props:", props);
  }

  increaseClickHanlder() {
    // must implement
  }

  decreaseClickHanlder() {
    // must implement
  }

  render() {
    const { name, age } = this.props;

    return (
      <div className="member">
        <label>
          Name: <span>{name}</span>
        </label>
        <br />
        <label>
          Age: <span>{age}</span>
        </label>
        <br />
        <label>
          Wishes: <span>{this.state.wishes}</span>
        </label>
        <button onClick={this.increaseClickHanlder}>+</button>
        <button onClick={this.decreaseClickHanlder}>-</button>
      </div>
    );
  }
}

export default Person;
