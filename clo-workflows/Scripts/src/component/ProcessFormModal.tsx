import { observer } from "mobx-react"
import { Dropdown } from "office-ui-fabric-react"
import { DefaultButton, PrimaryButton } from "office-ui-fabric-react/lib/Button"
import { Panel, PanelType } from "office-ui-fabric-react/lib/Panel"
import { Modal } from "office-ui-fabric-react/lib/Modal"
import * as React from "react"

import { ClientStore } from "../store/ClientStore"
import FormControlGroup from "./FormControlGroup"

export interface IFormPanelProps {
    clientStore: ClientStore
    togglePanel(m: string, v: string | boolean)
}

const ProcessFormModal = (props: IFormPanelProps) => {
    return (
        <Modal
            isOpen={props.clientStore.showProcessModal}
            onDismiss={() => {
                props.togglePanel("showProcessModal", false)
            }}
            isBlocking={true}
        >
            <div
                style={{
                    height: "80vh",
                    width: "40vw",
                    padding: "32px",
                }}
            >
                <h2>New Process Form</h2>
                <Dropdown
                    label="Select the Work Type:"
                    selectedKey={props.clientStore.viewState.selectedWorkType ? props.clientStore.viewState.selectedWorkType : undefined}
                    options={props.clientStore.WorkTypesAsOptions.map((field, index) => ({
                        text: field.text,
                        value: field.text,
                        key: field.text,
                    }))}
                    style={{
                        width: "200px",
                        margin: "20px 0px",
                    }}
                    placeHolder={
                        props.clientStore.viewState.selectedWorkType ? props.clientStore.viewState.selectedWorkType : "select a Work type"
                    }
                    onChanged={e => {
                        props.togglePanel("selectedWorkType", e.text)
                    }}
                />
                {props.clientStore.viewState.selectedWorkType && (
                    <div>
                        <FormControlGroup
                            data={props.clientStore.newProcess}
                            formControls={props.clientStore.viewState.workTypeForm()}
                            validation={props.clientStore.newWorkValidation}
                            onChange={props.clientStore.updateNewProcess}
                        />
                    </div>
                )}
                <PrimaryButton
                    description="Submit Process Request"
                    onClick={e => {
                        props.clientStore.submitProcess(props.clientStore.newProcess.toJSON())
                    }}
                    text="Submit Work Request"
                />
                <br />
                <br />
                <DefaultButton
                    description="close without submitting"
                    text="Clear and Cancel"
                    onClick={() => {
                        props.clientStore.closeProcessModal()
                    }}
                />
                <DefaultButton
                    text="Close"
                    description="close without submitting"
                    onClick={() => {
                        props.togglePanel("showProcessModal", false)
                    }}
                />
            </div>{" "}
        </Modal>
    )
}
export default observer(ProcessFormModal)