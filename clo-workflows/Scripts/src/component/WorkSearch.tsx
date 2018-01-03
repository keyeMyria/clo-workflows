import * as React from "react"
import { Dropdown, IDropdown, DropdownMenuItemType, IDropdownOption } from "office-ui-fabric-react/lib/Dropdown"
import { IMusicWork, WorkType } from "../model/Work"
import { inject, observer } from "mobx-react"
import { INewProjectState } from "../model/NewProjectState"
import { UserStore } from "../store/UserStore"
import { RootStore } from "../store/RootStore"

export interface IWorkSearchProps {
  workType: WorkType
}
export const  WorkSearch = observer( (props: IWorkSearchProps)=> {

    const options = [{ key: "Header", text: "Work Types", itemType: DropdownMenuItemType.Header }]
    
    return (
     <div> 
        <h3> Search for existing </h3>  
        
        {`WORKTYPE: ${props.workType}`} 
     </div>
    )
  })