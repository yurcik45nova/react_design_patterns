import { UncontrolledFlow } from "./uncontrolled-flow";

const StepOne = ({ goNext }) => {
  return (
    <>
      <h1>Step #1 Input your Name</h1>
      <button onClick={() => goNext({ name: "My Name"})}>Next</button>
    </>
  );
};

const StepTwo = ({ goNext }) => {
  return (
    <>
      <h1>Step #2 Input you age</h1>
      <button onClick={() => goNext({ name: 23})}>Next</button>
    </>
  );
};

const StepThree = ({ goNext }) => {
  return (
    <>
      <h1>Step #3 Input your country</h1>
      <button onClick={() => goNext({ name: "Mars"})}>Next</button>
    </>
  );
};

export const ContUncontComponentsImplementation = () => {
  return (
    <>
      <UncontrolledFlow onDone={(data) => {
        console.log("final step data: ", data)
      }}>
        <StepOne />
        <StepTwo />
        <StepThree />
      </UncontrolledFlow>
    </>
  );
};
