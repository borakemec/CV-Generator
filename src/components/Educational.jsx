import {useState} from "react";

export default function Educational({educationInfo, setEducationInfo, activeEditor, setActiveEditor}) {
    const isEditing = activeEditor === 'educational';

    const handleChanges = (e) => {
        const {name, value} = e.target;
        setEducationInfo(prevInfo => ({...prevInfo, [name]: value}));
    }

    const toggleEdit = () => {
        if(isEditing) {
            setActiveEditor(null);
        }
        else {
            setActiveEditor('educational')
        }
    }

    return (
        <>
            {isEditing ? (
                <div className='educational-big-container edit-mode'>
                    <p className='educational-info-title'>Education Information</p>
                    <label className='school-label' htmlFor='schoolField'>School Name</label>
                    <input name='school' type='text' id='schoolField' maxLength='50' value={educationInfo.school}
                           onChange={handleChanges}/>
                    <label className='deparment-label' htmlFor='departmentField'>Department</label>
                    <input name='department' type='text' id='departmentField' maxLength='50' value={educationInfo.department}
                           onChange={handleChanges}/>
                    <label className='degree-label' htmlFor='degreeField'>Degree</label>
                    <input name='degree' type='text' id='degreeField' maxLength='30' value={educationInfo.degree}
                           onChange={handleChanges}/>
                    <div className='date-div'>
                        <label className='start-label' htmlFor='startField'>Start Date</label>
                        <input name='startDate' type='text' id='startField' maxLength='30' value={educationInfo.startDate}
                               onChange={handleChanges}/>

                        <label className='end-label' htmlFor='endField'>End Date</label>
                        <input name='endDate' type='text' id='endField' maxLength='30' value={educationInfo.endDate}
                               onChange={handleChanges}/>
                    </div>
                    <button onClick={toggleEdit} className='save-button' type='button'>Save</button>
                </div>
            ) : (
                <div className='educational-container view-mode'>
                    <p className='educational-info-title'>Education Information</p>
                    <button onClick={toggleEdit} className='edit-button' type='button'>Edit</button>
                </div>
            )}
        </>
    )
}