export default function Result( {generalInfo, educationInfo, practicalInfo} ) {
    return (
        <div className='main-container'>
            <p className='person-name-text'>{generalInfo.name}</p>
            <div className='contact-info-div'>
                <p className='person-email-text'>{generalInfo.email}</p>
                <p className='person-phone-text'>{generalInfo.phone}</p>
            </div>
            <p className='education-title-text'>Education</p>
            <hr />
            <div className='education-info-div'>
                <div className='edu-first-line'>
                    <p className='school-title'>{educationInfo.school}</p>
                    <p className='start-end-date'>{educationInfo.startDate} - {educationInfo.endDate}</p>
                </div>
                <p className='department-text'>{educationInfo.department}</p>
                <p className='degree-text'>{educationInfo.degree}</p>
            </div>
            <p className='practical-title-text'>Experience</p>
            <hr />
            <div className='practical-info-div'>
                <div className='practical-first-line'>
                    <p className='company-title'>{practicalInfo.company}</p>
                    <p className='start-end-date'>{practicalInfo.startDate} - {practicalInfo.endDate}</p>
                </div>
                <p className='position-title'>{practicalInfo.position}</p>
                <p className='position-description'>{practicalInfo.description}</p>
            </div>
        </div>
    )
}