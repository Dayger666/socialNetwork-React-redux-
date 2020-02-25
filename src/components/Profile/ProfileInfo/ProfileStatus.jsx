import React from "react";
import classes from './ProfileInfo.module.css';

export class ProfileStatus extends React.Component {
    newStatus = React.createRef();
    state = {
        editMode: false,
        status: this.props.status,
    };
    onStatusChange=(e)=>{
    this.setState({
        status:e.currentTarget.value,
    },()=>{})
    };
    componentDidUpdate(prevProps, prevState, snapshot) {{
        if(prevProps.status!==this.props.status)
            this.setState({
                status:this.props.status,
            })
    }
    }
    render() {

        return (
            <div>
                {
                    this.state.editMode ?
                        <div>
                            <input onChange={this.onStatusChange
                            } ref={this.newStatus} autoFocus={true} onBlur={() => {
                                this.setState({
                                    editMode: false
                                });
                                this.props.updateStatus(this.state.status);
                            }} value={this.state.status}/>
                        </div> :
                        <div className={classes.status} onDoubleClick={() => {
                            this.setState({
                                editMode: true,
                            });
                        }}>
                    <span>{this.props.status}
            </span>
                        </div>
                }
            </div>
        )
    }

}