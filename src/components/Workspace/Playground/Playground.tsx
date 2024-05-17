
import React from 'react';
import PreferenceNav from './PreferenceNav/PreferenceNav';
import Split from 'react-split';
import CodeMirror from '@uiw/react-codemirror';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { cpp } from '@codemirror/lang-cpp';
import EditorFooter from './EditorFooter';
import { javascript } from '@codemirror/lang-javascript';
import { Problem } from '@/utils/types/problem';
type PlaygroundProps = {
    problem:Problem;
};

const Playground:React.FC<PlaygroundProps> = ({problem}) => {
    const[activeTestCaseId,setActiveTestCaseId] = React.useState(0);
    
    return (
        <div className='flex flex-col bg-dark-layer-1 relative overflow-x-hidden'>
            <PreferenceNav></PreferenceNav>
            <Split className='h-[calc(100vh-150px)]'  direction='vertical' sizes={[60,40]} minSize={60}>
                <div className="w-full overflow-auto">
                    <CodeMirror
                        value={problem.starterCode}
                        theme={vscodeDark}
                        extensions={[javascript()]}
                        style={{fontSize:16}}
                    />
                </div>
                <div className='w-full px-5 overflow-auto'>
                    <div className='flex h-10 items-center space-x-6'>
                        <div className='relative flex h-full flex-col justify-center cursor-pointer'>
                            <div className='text-sm font-medium leading-5 text-white'>Testcases</div>
                            <hr className='absolute bottom-0 h-0.5 w-full rounded-full border-none bg-white'></hr>
                        </div>
                    </div>
                    <div className='flex'>
                        {problem.examples.map((example, index)=>(
                            <div className='mr-2 items-start mt-2' key={example.id}
                                onClick={()=>setActiveTestCaseId(index)}
                            >
                                <div className='flex flex-wrap items-center gap-y-4'>
                                    <div className='font-medium items-center whitespace-nowrap focus:outline-none inline-flex bg-fill-3 dark:bg-dark-fill-3 hover:bg-fill-2 dark:hover:bg-dark-fill-2 relative rounded-lg px-4 py-1 hover:text-label-1 dark:hover:text-dark-label-1 text-label-1 dark:text-dark-label-1 text-white'>case {index+1}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='font-semibold my-4'>
                        <p className='text-sm font-medium mt-4 text-white'>Input:</p>
                    </div>
                    <div className="w-full cursor-text rounded-lg border px-3 py-[10px] font-menlo bg-fill-3 dark:bg-dark-fill-3 border-transparent mt-2 text-white font-semiboldbold">{problem.examples[activeTestCaseId].inputText}</div>
                    <div className='font-semibold my-4'>
                        <p className='text-sm font-medium mt-4 text-white'>Output:</p>
                    </div>
                    <div className="w-full cursor-text rounded-lg border px-3 py-[10px] font-menlo bg-fill-3 dark:bg-dark-fill-3 border-transparent mt-2 text-white font-semiboldbold">{problem.examples[activeTestCaseId].outputText}</div>
                </div>
            </Split>
            <EditorFooter></EditorFooter>

        </div>
        
    );
}
export default Playground;