import React, { Component } from "react"
import { connect } from "react-redux"

import { devlog } from "../utils/log"
import { ContainerCenter } from "../components/Container"

const mapStateToProps = () => ({})

const mapDispatchToProps = {}

class Home extends Component {
  render() {
    devlog("Home", this.props)
    return (
      <ContainerCenter>
        <h1>React Template</h1>
      </ContainerCenter>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
