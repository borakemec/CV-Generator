import {useState} from "react";

export default function General({generalInfo, setGeneralInfo, activeEditor, setActiveEditor}) {

    const isEditing = activeEditor === 'general';

    const handleChanges = (e) => {
        const {name, value} = e.target;
        setGeneralInfo(prevInfo => ({...prevInfo, [name]: value}));
    }

    const toggleEdit = () => {
        if(isEditing) {
            setActiveEditor(null);
        }
        else {
            setActiveEditor('general')
        }
    }

    return (
        <>
            {isEditing ? (
                <div className='general-big-container edit-mode'>
                    <p className='general-info-title'>General Information</p>
                    <label className='name-label' htmlFor='nameField'>Your Full Name</label>
                    <input name='name' type='text' id='nameField' value={generalInfo.name} onChange={handleChanges}/>
                    <label htmlFor='emailField'>Your Email Address</label>
                    <input name='email' type='email' id='emailField' value={generalInfo.email} onChange={handleChanges}/>
                    <label htmlFor='phoneField'>Your Phone Number</label>
                    <input name='phone' type='text' id='phoneField' maxLength='20' value={generalInfo.phone} onChange={handleChanges}/>
                    <button onClick={toggleEdit} className='save-button' type='button'>Save</button>
                </div>
            ) : (
                <div className='general-container view-mode'>
                    <p className='general-info-title'>General Information</p>
                    <button onClick={toggleEdit} className='edit-button' type='button'>Edit</button>
                </div>
            )}
        </>
    )
}