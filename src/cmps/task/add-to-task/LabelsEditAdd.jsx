import React from 'react'

import { MdDone, MdKeyboardArrowLeft } from 'react-icons/md';


export class LabelsEditAdd extends React.Component {


    state = {
        label: {
            title: '',
            color: '',

        }

    }


    componentDidMount() {
        const { label } = this.props
        if (label) this.setState({ label })

    }

    handleInputChange = (ev) => {
        const field = ev.target.name
        const value = ev.target.value
        this.setState((prevState) => ({ label: { ...prevState.label, [field]: value } }))

    }

    handleColorChange = (color) => {
        this.setState((prevState) => ({ label: { ...prevState.label, color } }))
    }



    render() {
        const { label, label: { title } } = this.state
        const { onSaveLabel, onRemoveLabel, setAddEditMode } = this.props



        return (

            <div className="labels-edit-add">
                <button className="icon-sm back-to-labels-btn" onClick={() => setAddEditMode()}><MdKeyboardArrowLeft /></button>
                <h4>Name</h4>
                <input
                    className="modal-search"
                    type="text"
                    name="title"
                    onChange={this.handleInputChange}
                    autoFocus
                    value={title}
                />

                <h4>Select a color</h4>
                <div className="colors-container">
                    {labelColors.map((color, idx) => {
                        return <div key={idx} style={{ backgroundColor: color }}
                            className="color-div flex"
                            onClick={() => this.handleColorChange(color)}>
                            {color === label.color && <span className="icon-sm"><MdDone /></span>}
                        </div>
                    })}
                </div>

                <div className="edit-add-btns flex row space-between">
                    <button className="btn-style1" onClick={() => onSaveLabel(label)}>Save</button>
                    <button className="btn-style1 delete-btn" onClick={() => onRemoveLabel(label.id)}>Delete</button>
                </div>
            </div >


        )
    }
}


const labelColors = ['#61bd4f', '#f2d600', '#ff9f1a', '#eb5a46', '#c377e0', '#0079bf', '#00c2e0', '#51e898', '#ff78cb', '#344563']