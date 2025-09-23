import { Helmet } from "react-helmet"
import ProfileSection from "../Section/profile"

const ProfilePage = () => {
  return(
    <>
      <Helmet>
        <title>Profile</title>
      </Helmet>

      <ProfileSection />
    </>
  )
}

export default ProfilePage