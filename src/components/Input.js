import React from 'react'
import {observer} from 'mobx-react'
import LabelField from '../Elements/LabelField'
import {updateValue} from './utils/actions'
import validationProps from './utils/validationProps'
import {enableUniqueIds} from 'react-html-id'

@observer
export default class Input extends React.Component{
    
    constructor(props) {
        super(props);
        validationProps(props);
        enableUniqueIds(this);
    }
      
    render(){
        const {backupValue,onChange,validator  , label,} = this.props || {};
        return(
            <div>
                <LabelField label={label} isRequired={true} htmlFor={this.nextUniqueId()}/>
                <input
                    id={this.lastUniqueId()}
                    onChange={(e)=>onChange(e)}
                    value={backupValue}
                    className="text-field" 
                />             
                {/* <Error error={field.message}/> */}
            </div>
        );
    }
    
}