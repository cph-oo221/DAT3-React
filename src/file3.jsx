import React from "react";
import { persons } from "./file2";

export function Welcome(props) {
  return <h3>Hello, {props.name}</h3>;
}

export function MultiWelcome() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edith" />
    </div>
  );
}

export function WelcomePerson(props) {
  return (
    <p>
      Hi, {props.person.firstName}, {props.person.lastName} (
      {props.person.email})
    </p>
  );
}

export function WelcomePersonList() {
  return (
    <div>
      {persons.map((p) => (
        <WelcomePerson key={p.email} person={p} />
      ))}
    </div>
  );
}
