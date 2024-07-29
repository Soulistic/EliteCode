import React, { useState } from 'react';
import PreferenceNav from './PreferenceNav/PreferenceNav';
import Split from 'react-split';
import CodeMirror from '@uiw/react-codemirror';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { cpp } from '@codemirror/lang-cpp';
import EditorFooter from './EditorFooter';
import { javascript } from '@codemirror/lang-javascript';
import { Problem } from '@/utils/types/problem';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, firestore } from '@/firebase/firebase';
import { toast } from 'react-toastify';
import { problems } from '@/utils/problem';
import { useRouter } from 'next/router';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
type PlaygroundProps = {
    problem:Problem;
    setSuccess:React.Dispatch<React.SetStateAction<boolean>>;
    setSolved:React.Dispatch<React.SetStateAction<boolean>>;
};

const Playground:React.FC<PlaygroundProps> = ({problem,setSuccess,setSolved}) => {
    const[activeTestCaseId,setActiveTestCaseId] = React.useState(0);
    const [userCode,setUserCode]=useState<string>(problem.starterCode);
    const [user]=useAuthState(auth);
    const {query:{pid}}=useRouter();

    const handleSubmit=()=>{
        if(!user){
            toast.error("Please login to submit your code",{
                position:"top-center",
                autoClose:3000,
                theme:"dark"
            })
            return
        }
        try{
            const cb=new Function(`return ${userCode}`)();
            const success=problems[pid as string].handlerFunction(cb);
            if(success){
                toast.success("Congrats! All test cases passed!",{
                    position:"top-center",
                    autoClose:3000,
                    theme:"dark"
                })
                setSuccess(true);
                setTimeout(() =>{
                    setSuccess(false);
                },3000);
                const userRef=doc(firestore,"users",user.uid);
                updateDoc(userRef,{
                    solvedProblems:arrayUnion(pid),
                });
                setSolved(true);
            }
        }
        catch(error:any){
            toast.error("Some test cases failed. Please try again!",{
                position:"top-center",
                autoClose:3000,
                theme:"dark"
            })
        }
    };
    const onChange=(value:string)=>{
        setUserCode(value);
    }
    return (
        <div className='flex flex-col bg-dark-layer-1 relative overflow-x-hidden'>
            <PreferenceNav></PreferenceNav>
            <Split className='h-[calc(100vh-94px)]'  direction='vertical' sizes={[60,40]} minSize={60}>
                <div className="w-full overflow-auto">
                    <CodeMirror
                        value={problem.starterCode}
                        theme={vscodeDark}
                        extensions={[javascript()]}
                        onChange={onChange}
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
                                    <div className={`font-medium items-center transition-all focus:outline-none inline-flex bg-dark-fill-3 hover:bg-dark-fill-2 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap ${activeTestCaseId===index?"text-white":"text-gray-500"}`}>case {index+1}</div>
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
            <EditorFooter handleSubmit={handleSubmit}></EditorFooter>

        </div>
        
    );
}
export default Playground;