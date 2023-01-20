import React from "react";
import { PersonType } from "../types/person";
import Person from "./PersonComponent";

type SimpsonProps = {
  members: PersonType[];
};
type SimpsonState = {};

class SimpsonFamily extends React.Component<SimpsonProps, SimpsonState> {
  constructor(props: SimpsonProps) {
    super(props);
  }
  render() {
    return <Person name="John Doe" age={35} />;
  }
}

export { SimpsonFamily };
