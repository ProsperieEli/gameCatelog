import React, { useState } from "react";

export default function CreateAccount() {
  const [userName, setUserName] = useState("");
  return (
    <div>
      <form>
        <label>
          Create a Username.
          <input type="text" name="userName" onClick={setUserName} />
          {console.log(userName)}
        </label>
      </form>
    </div>
  );
}
