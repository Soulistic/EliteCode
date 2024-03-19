import React, { useState } from 'react';
import Split from 'react-split';
import ProblemDescription from './ProblemDescription/ProblemDescription';

const Workspace: React.FC = () => {
    const [showEditorial, setShowEditorial] = useState(false);
    const [showDescription,setShowDescription] = useState(true);
    const handleClick = () => {

    };

    return (
        <Split className='split'>
            <ProblemDescription></ProblemDescription>
            <div>code section</div>
        </Split>
    );
};

export default Workspace;
