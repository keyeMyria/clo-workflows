import * as React from "react"
import { Dropdown, IDropdown, DropdownMenuItemType, IDropdownOption } from "office-ui-fabric-react/lib/Dropdown"
import { IMusicWork, WorkType } from "../model/Work"
import { inject, observer } from "mobx-react"
import { INewProjectState } from "../model/UIStoreInterfaces"
import { UserStore } from "../store/UserStore"
import { RootStore } from "../store/RootStore"
export interface IWorkTypeDropdownProps {
  workTypes: Array<WorkType>
  newProjectState: INewProjectState
  setNewProjectState: any
}

const styles = {
  maxWidth:"350px"
}
export const WorkTypeDropdown = (props: IWorkTypeDropdownProps)=>{
    const options = [{ key: "Header", text: "Work Types", itemType: DropdownMenuItemType.Header }]
    props.workTypes.map(field => options.push({ key: `${field}`, text: `${field}`, itemType: DropdownMenuItemType.Normal }))

    console.log("WorkTypeDropdown component rendered")
    
    return (
      <Dropdown
        className="WorkTypeDropdownClass"
        label="Select the Work Type:"
        selectedKey={props.newProjectState.key ? props.newProjectState.key : undefined}
        placeHolder="Select an Option"
        options={options}
        onChanged={props.setNewProjectState}
        style={styles}
      />
    )
  }

// export interface IWorkTypeDropdownProps {
//   workTypes: Array<WorkType>
//   rootStore?: RootStore
// }
// @inject("rootStore")
// @observer
// export class WorkTypeDropdown extends React.Component<IWorkTypeDropdownProps> {
//   componentWillMount() {
//     this.userStore = this.props.rootStore.userStore
//   }

//   private userStore: UserStore
//   render() {
//     const { setNewProjectState, newProjectState, currentUser } = this.userStore
//     const options = [{ key: "Header", text: "Work Types", itemType: DropdownMenuItemType.Header }]
//     this.props.workTypes.map(field =>
//       options.push({ key: `${field}`, text: `${field}`, itemType: DropdownMenuItemType.Normal }),
//     )
//     return (
//       <Dropdown
//         className="Dropdown-example"
//         label="Controlled example:"
//         selectedKey={newProjectState.key ? newProjectState.key : undefined}
//         placeHolder="Select an Option"
//         options={options}
//         onChanged={setNewProjectState}
//       />
//     )
//   }
// }
