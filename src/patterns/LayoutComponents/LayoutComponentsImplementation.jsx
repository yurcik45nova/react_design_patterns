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

export const LayoutComponentsImplementation = () => {
    return (
        <SplitScreen leftWidth={1} rightWidth={3}>
            <LeftSideComp />
            <RightSideComp />
        </SplitScreen>
    )
}