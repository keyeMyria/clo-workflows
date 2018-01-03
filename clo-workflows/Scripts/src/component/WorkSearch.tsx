import * as React from "react"
import { WorkType } from "../model/Work"
import { inject, observer } from "mobx-react"
import {
  SearchBox
} from 'office-ui-fabric-react/lib/SearchBox';

export interface IWorkSearchProps {
  workType: WorkType
}
const styles = {
  maxWidth:"350px"
}
export const  WorkSearch = observer( (props: IWorkSearchProps)=> {    
    return (
     <div style={styles}> 
        <h3> Search for existing </h3>  
        
        {`${props.workType}`} 
        
        <SearchBox
        labelText={`Search for existing ${props.workType}s`}
          onEscape={ (ev) => {
            console.log('Custom onEscape Called');
          } }
          onClear={ (ev) => {
            console.log('Custom onClear Called');
          } }
          onChange={ (newValue) => console.log('SearchBox onChange fired: ' + newValue) }
          onSearch={ (newValue) => console.log('SearchBox onSearch fired: ' + newValue) }
          onFocus={ () => console.log('onFocus called') }
          onBlur={ () => console.log('onBlur called') }
        />
     </div>
    )
  })