import { ParentComponent } from "./parent"
import mitt from "mitt"

export const emitter = mitt()

export const ObserverPatternImplementation = () => {
  return (
    <>
      <ParentComponent />
    </>
  )
}