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

interface IAnonymousProps {
userStore:UserStore
  
}
@inject("rootStore")
export class Anonymous extends React.Component<IAnonymousProps, RootStore> {
  componentWillMount() {
    this.userStore = this.props.userStore
  }  
  private userStore: UserStore
  render() {
    console.log("anon component rendered")
    const { currentUser, currentUserProjects } = this.props.userStore
    return (
      <div>
        <Header currentUser = {this.props.userStore.currentUser} />
        <NewProject userStore={this.userStore} />
        <ExistingProjects currentUser={currentUser} currentUserProjects = {currentUserProjects} />

      </div>
    )
  }
}
