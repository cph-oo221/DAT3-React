import upper, { text1, text2, text3 } from "./file1";
import obj, { males, females, persons } from "./file2";
import {
  Welcome,
  MultiWelcome,
  WelcomePerson,
  WelcomePersonList,
} from "./file3";
import JokeComponent from "./file4";

import "./App.css";

function App() {
  const person = obj;
  const { firstName, email } = person;

  const arr = [...males, "kurt", ...females, "Tina"];
  console.log(arr);

  const personV2 = { ...person, friends: arr, phone: 123456 };
  console.log(personV2);
  return (
    <>
      <h2>Ex 1</h2>
      <p>{upper("Is this all uppercase ?")}</p>
      <p>{upper(text1)}</p>
      <p>{upper(text2)}</p>
      <p>{upper(text3)}</p>

      <h2>Ex 2</h2>
      <p>
        First name: {firstName} - Email: {email}{" "}
      </p>

      <h2>Ex 3</h2>
      <Welcome name="Joe" />
      <MultiWelcome></MultiWelcome>
      <WelcomePerson person={persons[0]} />
      <WelcomePerson person={persons[1]} />
      <WelcomePerson person={persons[2]} />

      <WelcomePersonList></WelcomePersonList>

      <h2>Ex 4</h2>
      <JokeComponent></JokeComponent>
    </>
  );
}

export default App;
