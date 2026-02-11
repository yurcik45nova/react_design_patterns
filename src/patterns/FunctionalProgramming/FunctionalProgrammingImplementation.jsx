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
      <RecursiveComponent data={myNestedObject} />
    </>
  )
}
