import * as React from "react"
import { IUser } from "../model/User"
import { Persona, PersonaInitialsColor } from "office-ui-fabric-react/lib/Persona"
export interface IHeaderProps {
  currentUser: IUser
}

const wrapperStyles = {
    backgroundColor: "#E8E8E8",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
} as React.CSSProperties

const personaStyles = {
    paddingTop: "18",
}

const titleStyles = {
    font: "65px Segoe UI, sans-serif",
    color: "#686868",
    marginLeft: "20%",
    alignSelf: "center",
} as React.CSSProperties

const Header = (props: IHeaderProps) => {
  const { currentUser } = props
  return (
    <div style={wrapperStyles}>
        <div style={titleStyles}>
            CLO Workflows
        </div>
        <div style={personaStyles}>
            <Persona
                size={4}
                initialsColor="#0078d7"
                primaryText={currentUser.name}
                secondaryText={`${currentUser.username} - ${currentUser.role.name}`}
            />
        </div>
    </div>
  )
}
export default Header
