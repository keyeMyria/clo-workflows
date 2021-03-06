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
    justifyContent: "flex-start",
    width: "100%",
} as React.CSSProperties

const personaStyles = {
    marginTop: 18,
}

const titleStyles = {
    font: "65px Segoe UI, sans-serif",
    color: "#686868",
    margin: "0 10% 0 30%",
    alignSelf: "center",
} as React.CSSProperties

const Header = (props: IHeaderProps) => {
    const { currentUser } = props
    return (
        <div style={wrapperStyles}>
            <div style={titleStyles}>Licensing Task Tracker</div>
            <div style={personaStyles}>
                <Persona
                    size={4}
                    initialsColor="#0078d7"
                    primaryText={currentUser.name}
                    secondaryText={`${currentUser.username} - ${currentUser.primaryRole.name}`}
                />
            </div>
        </div>
    )
}
export default Header
