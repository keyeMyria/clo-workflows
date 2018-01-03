import * as React from 'react'
import {IUser} from '../model/User';
import {WorkTypeDropdown} from './WorkTypeDropdown';
import {IArticleWork, WorkType, IBookWork, IBookChapterWork, IImageWork, IOtherWork, IVideoWork, IWebsiteWork, IMusicWork} from '../model/Work';
import Header from './Header';
import {INewProjectState} from '../model/UIStoreInterfaces';
import {UserStore} from '../store/UserStore';
import {WorkSearch} from "./WorkSearch"
import {observer} from 'mobx-react';
interface INewProjectProps{
userStore: UserStore
}

export const NewProject  = observer((props: INewProjectProps)=> {
    const workTypes: Array<WorkType> = ["Article", "Book", "Book Chapter", "Image", "Music", "Other", "Video", "Website"]
    return(
    <div>
      <WorkTypeDropdown workTypes = {workTypes} newProjectState={props.userStore.newProjectState} setNewProjectState={props.userStore.setNewProjectState} /> 
      {
        props.userStore.newProjectState.key &&
        <WorkSearch workType={props.userStore.newProjectState.key}/>
        
      } 
    </div>
    )
  })

