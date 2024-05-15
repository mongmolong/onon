import React, { useState } from 'react';
import '../../styles/SubModelingStyle.css'; //eye만 
import '../../styles/SubMenusStyle.css'; //서브메뉴 공통

import SubSelect from '../SubSelect';
import SubModeling from '../contents/SubModeling';
import SubStructure from '../contents/SubStructure';

function PatientModeling(props) {
    const [toggle2, setToggle2] = useState(1);
    const toggleTab2 = (index) => {
        setToggle2(index);
    }
    return (
        <>
                    <div className="subMenus">
                 <div >
                    <p key={1}  className={toggle2 === 1 ? "subConOn" : "mainTab"} onClick={() => toggleTab2(1)} >Image registration</p>
                    <p key={2}  className={toggle2 === 2 ? "subConOn" : "mainTab"} onClick={() => toggleTab2(2)} >Structure definition</p>
                    <p key={3}  className={toggle2 === 3 ? "subConOn" : "mainTab"} onClick={() => toggleTab2(3)} >Deformable registration</p>
                    <p key={4}  className={toggle2 === 4 ? "subConOn" : "mainTab"} onClick={() => toggleTab2(4)} >Eye modeling</p>
                </div>         
            </div>
            <SubSelect />
            <ul className="subContent">
                <li key={1} className={toggle2 === 1 ? "subConActive" : "subConTab"}>1번입니다.</li>
                <li key={2}  className={toggle2 === 2 ? "subConActive" : "subConTab"}><SubStructure/></li>
                <li key={3}  className={toggle2 === 3 ? "subConActive" : "subConTab"}>3번입니다.</li>
                <li key={4}  className={toggle2 === 4 ? "subConActive" : "subConTab"}><SubModeling /></li>
            </ul>

        </>
    );
}

export default PatientModeling;