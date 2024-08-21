import {useState} from "react";

export default function General({practicalInfo, setPracticalInfo, activeEditor, setActiveEditor}) {

    const isEditing = activeEditor === 'practical';

    const handleChanges = (e) => {
        const {name, value} = e.target;
        setPracticalInfo(prevInfo => ({...prevInfo, [name]: value}));
    }

    const toggleEdit = () => {
        if(isEditing) {
            setActiveEditor(null);
        }
        else {
            setActiveEditor('practical')
        }
    }

    return (
        <>
            {isEditing ? (
                <div className='practical-big-container edit-mode'>
                    <p className='practical-info-title'>Practical Information</p>
                    <label className='company-label' htmlFor='companyField'>Company</label>
                    <input name='company' type='text' id='companyField' maxLength='50' value={practicalInfo.company}
                           onChange={handleChanges}/>
                    <label htmlFor='positionField' className='position-label'>Position Title</label>
                    <input name='position' type='text' id='positionField' maxLength='50' value={practicalInfo.position}
                           onChange={handleChanges}/>
                    <label htmlFor='descField' className='desc-label'>Position Description</label>
                    <textarea name='description' id='descField' value={practicalInfo.description}
                              onChange={handleChanges}/>
                    <div className='date-div'>
                        <label className='start-label' htmlFor='startField'>Start Date</label>
                        <input name='startDate' type='text' id='startField' maxLength='30' value={practicalInfo.startDate}
                               onChange={handleChanges}/>

                        <label className='end-label' htmlFor='endField'>End Date</label>
                        <input name='endDate' type='text' id='endField' maxLength='30' value={practicalInfo.endDate}
                               onChange={handleChanges}/>
                    </div>
                    <button onClick={toggleEdit} className='save-button' type='button'>Save</button>
                </div>
            ) : (
                <div className='practical-container view-mode'>
                    <p className='practical-info-title'>Practical Information</p>
                    <button onClick={toggleEdit} className='edit-button' type='button'>Edit</button>
                </div>
            )}
        </>
    )
}