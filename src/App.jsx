import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Welcome from "./components/Welcome";
import CreateAccount from "./components/CreateAccount";
function App() {
  return (
    <>
      {/* <Welcome /> */}
      <CreateAccount />
    </>
  );
  /*
User comes to the app.

App Flow: 
Welcome -> CreateAccount --> Home
  1. Welcomed to a front page. App gives a description. 
      -The app allows the user to search for games to play through a varied search field. Allowing the reader to format out games/franchises they do not like(say someone does not want to see any game from the company Blizzard or any call of Duty game)
      - using https://api-docs.igdb.com/?javascript#endpoints
  2. App ask for user:
      Make an account
      Console preference(or PC).
      Age.
      Genre pref(Not mandatory).
      

  3. Search method.
  4. Daily Randomizer.
  5. Save games

  optional ideas:
  Community reviews on games.
  */
}
export default App;
