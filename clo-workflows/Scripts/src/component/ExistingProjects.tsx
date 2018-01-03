import * as React from "react"
import { IUser } from "../model/User"
import {IProject} from "../model/Project";
import { PrimaryButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';
import { Label } from 'office-ui-fabric-react/lib/Label';
interface IExistingProjectsProps {
  currentUser: IUser
  currentUserProjects: Array<IProject>
}

export class ExistingProjects extends React.Component<IExistingProjectsProps> {
  render() {
    const { currentUser, currentUserProjects } = this.props
    return (
      <div>
        ...existing projects
      </div>
    )
  }
}


