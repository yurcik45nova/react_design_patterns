import { GreenSmallButton, RedButton } from "./composition"
import { RedSmallButton } from "./partial"
import { RecursiveComponent } from "./recursive"


const myNestedObject = {
  key1: "value1",
  key2: {
    innerKey1: "innerKey1",
    innerKey2: {
      innerInnerKey1: "innerInnerKey1",
      innerInnerKey2: "innerInnerKey2"
    }
  },
  key3: "value3"
}

export const FunctionalProgrammingImplementation = () => {
  return (
    <>
      {/* <RecursiveComponent data={myNestedObject} /> */}
      {/* <RedButton text={"RedButton"}  />
      <GreenSmallButton text={"GreenSmallButton"}  /> */}
      <RedButton text={"red button"} />
      <RedSmallButton text={"small and red button"} />
    </>
  )
}
