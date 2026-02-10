import { useState, useEffect } from "react";

export const ControlledForm = () => {
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    if (name.length < 1) {
      setError("name can not be empty")
    } else {
      setError("")
    }
  }, [name]);

  return (
    <form>
      {error && <p>{error}</p>}
      <input
        name="name"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        name="age"
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
};

// What’s happening
//     React state (name) is the single source of truth
//     The DOM input cannot change itself

//     Every keystroke:
//         Browser fires onChange
//         React updates state
//         React re-renders
//         React sets <input value={name}>

// If React doesn’t update name, the input will not change.
// That is 100% controlled.
// 👉 The DOM is basically a dumb display here.
