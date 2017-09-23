import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { LinkPadded } from "../components/Link"
import { ContainerCenter } from "../components/Container"
import { goBack } from "../redux/modules/router"

const mapStateToProps = () => ({})

const mapDispatchToProps = {
  goBack,
}

const NotFound = ({ goBack }) => (
  <ContainerCenter>
    <h1>404</h1>
    <h3>Uh.. parece que te perdiste</h3>
    <LinkPadded onClick={goBack}>Volver a página anterior</LinkPadded>
    <LinkPadded to="/">Ir a página de inicio</LinkPadded>
  </ContainerCenter>
)

NotFound.propTypes = {
  goBack: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(NotFound)
