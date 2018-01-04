import * as React from "react"
import { IUser } from "../model/User"
import {NewProject} from "./NewProject"
import {IProject} from "../model/Project";
import {ExistingProjects} from "./ExistingProjects";
import {observer, inject} from "mobx-react";
import {RootStore} from "../store/RootStore";
import {UserStore} from "../store/UserStore";
import {INewProjectState} from "../model/UIStoreInterfaces";
import Header from "./Header";
import { Label } from 'office-ui-fabric-react/lib/Label';
import {
  Pivot,
  PivotItem,
  PivotLinkSize
} from 'office-ui-fabric-react/lib/Pivot';
interface IAnonymousProps {
userStore:UserStore
  
}
@inject("rootStore")
@observer
export class Anonymous extends React.Component<IAnonymousProps, RootStore> {
  componentWillMount() {
    this.userStore = this.props.userStore
  }  
  private userStore: UserStore
  render() {
    console.log("anon component rendered")
    const { currentUser, currentUserProjects, } = this.props.userStore
    return (
      <div>
        <Header currentUser = {this.props.userStore.currentUser} />
        <Pivot linkSize={ PivotLinkSize.large }>
          <PivotItem linkText='New Request'>
            <Label>Create a new Project</Label>
            <NewProject userStore={this.userStore} />
          </PivotItem>
          <PivotItem linkText='Past Requests'>
            <Label>Your past requests</Label>
            <ExistingProjects currentUser={currentUser} currentUserProjects = {currentUserProjects} />
          </PivotItem>
        </Pivot>
      </div>
    )
  }
}
