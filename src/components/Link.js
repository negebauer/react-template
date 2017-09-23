import React from "react"
import PropTypes from "prop-types"
import { Link as RouterLink } from "react-router-dom"
import styled from "styled-components"

const linkColor = "#00bfff"
const linkColorHover = "#1e90ff"

export const LinkAction = styled.div`
  color: ${linkColor};
  text-decoration: none;
  font-weight: lighter;
  cursor: pointer;

  :hover {
    color: ${linkColorHover};
  }
`

export const LinkHref = styled.a`
  color: ${linkColor};
  text-decoration: none;
  font-weight: lighter;
  cursor: pointer;

  :hover {
    color: ${linkColorHover};
  }
`

export const LinkNav = styled(RouterLink)`
  color: ${linkColor};
  text-decoration: none;
  font-weight: lighter;
  cursor: pointer;

  :hover {
    color: ${linkColorHover};
  }
`

const Link = ({ to, onClick, children, href }) =>
  onClick ? (
    <LinkAction onClick={onClick}>{children}</LinkAction>
  ) : href ? (
    <LinkHref href={href}>{children}</LinkHref>
  ) : to ? (
    <LinkNav to={to}>{children}</LinkNav>
  ) : null

Link.propTypes = {
  to: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.any,
  href: PropTypes.string,
}

export const LinkPaddedStyle = styled.div`padding: 6px;`

export const LinkPadded = props => (
  <LinkPaddedStyle>
    <Link {...props} />
  </LinkPaddedStyle>
)

export default Link
