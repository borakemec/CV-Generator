import './style.css'
import Result from "./components/Result.jsx";
import General from "./components/General.jsx";
import Educational from "./components/Educational.jsx";
import Practical from "./components/Practical.jsx";
import {useState, useEffect} from "react";

export default function App() {
    const [generalInfo, setGeneralInfo] = useState(() => {
        const savedGeneralInfo = localStorage.getItem('generalInfo');
        return savedGeneralInfo ? JSON.parse(savedGeneralInfo) : { name: 'Your Name', email: 'youremail@example.com', phone: '123-456-7890' };
    });

    const [educationInfo, setEducationInfo] = useState(() => {
        const savedEducationInfo = localStorage.getItem('educationInfo');
        return savedEducationInfo ? JSON.parse(savedEducationInfo) : { school: 'School Name', department: 'Department', degree: 'Highest Degree', startDate: '05/20/2015', endDate: '03/15/2020' };
    });
    const [practicalInfo, setPracticalInfo] = useState(() => {
        const savedPracticalInfo = localStorage.getItem('practicalInfo');
        return savedPracticalInfo ? JSON.parse(savedPracticalInfo) : { company: 'Company Name', position: 'Position Title', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
                'Curabitur et mollis ante, nec volutpat nulla. Cras fringilla malesuada ex sed malesuada. Etiam nisi felis, pulvinar eu massa nec, pulvinar pellentesque justo. Nulla vulputate leo vitae ' +
                'ipsum iaculis, id lobortis risus vulputate. Proin ultricies semper lacus ac vulputate.', startDate: '08/27/2021', endDate: 'Present' };
    });

    useEffect(() => {
        localStorage.setItem('generalInfo', JSON.stringify(generalInfo));
    }, [generalInfo]);

    useEffect(() => {
        localStorage.setItem('educationInfo', JSON.stringify(educationInfo));
    }, [educationInfo]);

    useEffect(() => {
        localStorage.setItem('practicalInfo', JSON.stringify(practicalInfo));
    }, [practicalInfo]);

    const [activeEditor, setActiveEditor] = useState(null);

    return (
        <>
            <div className='left-container'>
                <General generalInfo = {generalInfo} setGeneralInfo={setGeneralInfo} activeEditor={activeEditor} setActiveEditor={setActiveEditor} />
                <Educational educationInfo = {educationInfo} setEducationInfo={setEducationInfo} activeEditor={activeEditor} setActiveEditor={setActiveEditor} />
                <Practical practicalInfo = {practicalInfo} setPracticalInfo={setPracticalInfo} activeEditor={activeEditor} setActiveEditor={setActiveEditor} />
            </div>
            <div className='right-container'>
                <Result generalInfo = {generalInfo} educationInfo = {educationInfo} practicalInfo = {practicalInfo} />
            </div>
        </>
    )
}