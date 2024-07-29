import React from 'react';
import Split from 'react-split'
import ProblemDescription from './ProblemDescription/ProblemDescription';
import Playground from './Playground/Playground';
import { Problem } from '@/utils/types/problem';
import Confetti from 'react-confetti';
type WorkspaceProps = {
    problem:Problem
};

const Workspace:React.FC<WorkspaceProps> = ({problem}) => {
    return(
        <Split className="split" minSize={0}>
            <ProblemDescription problem={problem}></ProblemDescription>
            <Playground problem={problem}></Playground>
        </Split>
    );
}
export default Workspace;