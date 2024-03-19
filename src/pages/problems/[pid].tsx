import Topbar from '@/components/Topbar/Topbar';
import React from 'react';

type ProblemPageProps = {
    
};

const ProblemPage:React.FC<ProblemPageProps> = () => {
    
    return(
        <div>
            <Topbar problemPage={true}></Topbar>
        </div>
    );
}
export default ProblemPage;