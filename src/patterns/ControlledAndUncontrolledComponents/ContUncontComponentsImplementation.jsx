import { useState } from "react";
import { ControlledFlow } from "./controlled-flow";

const StepOne = ({ goNext }) => {
  return (
    <>
      <h1>Step #1 Input your Name</h1>
      <button onClick={() => goNext({ name: "My Name" })}>Next</button>
    </>
  );
};

const StepTwo = ({ goNext }) => {
  return (
    <>
      <h1>Step #2 Input you age</h1>
      <button onClick={() => goNext({ age: 27 })}>Next</button>
    </>
  );
};

const StepThree = ({ goNext }) => {
  return (
    <>
      <h1>Congredulatons! You qualify for the gift!</h1>
      <button onClick={() => goNext({})}>Next</button>
    </>
  );
};

const StepFour = ({ goNext }) => {
  return (
    <>
      <h1>Step #4 Input your Country</h1>
      <button onClick={() => goNext({ country: "Mars" })}>Next</button>
    </>
  );
};

export const ContUncontComponentsImplementation = () => {
  const [data, setData] = useState({});
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const goNext = (dataFromStep) => {

    setData({ ...data, ...dataFromStep })
    setCurrentStepIndex(currentStepIndex + 1)
  };
  return (
    <>
      <ControlledFlow
        currentIndex={currentStepIndex}
        onNext={goNext}
      >
        <StepOne />
        <StepTwo />
        {data.age > 25 && <StepThree />}
        <StepFour />
      </ControlledFlow>
    </>
  );
};
