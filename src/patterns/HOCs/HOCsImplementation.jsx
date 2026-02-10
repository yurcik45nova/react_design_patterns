import { logProps } from "../ControlledAndUncontrolledComponents/log-props"
import { UserInfo } from "../ContainerComponents/user-info"


const UserInfoWrapper = logProps(UserInfo)

export const HOCsImplementation = () => {
  return (
    <>
      <UserInfoWrapper test={"test"} />
    </>
  )
}