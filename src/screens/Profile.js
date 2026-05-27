import React from "react"
import PropTypes from "prop-types"

import { ContainerCenter } from "../components/Container"

const Profile = ({ match }) => (
  <ContainerCenter>
    <h1>Profile</h1>
    <p>Viewing profile for: {match.params.username}</p>
  </ContainerCenter>
)

Profile.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      username: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

export default Profile
