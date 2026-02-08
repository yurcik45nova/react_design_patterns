import { SplitScreen } from "./patterns/LayoutComponents/split-screen"

const LeftSideComp = () => {
  return (
    <h2 style={{ backgroundColor: "crimson" }}>I am Left</h2>
  )
}

const RightSideComp = () => {
  return (
    <h2 style={{ backgroundColor: "burlywood" }}>I am Right</h2>
  )
}

export const App = () => {
  return (
    <SplitScreen Left={LeftSideComp} Right={RightSideComp} />
  )
}
