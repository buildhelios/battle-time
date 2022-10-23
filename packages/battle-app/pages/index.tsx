import { apiBaseUrl, Question } from "@battle-time/common";
import { useEffect } from "react";
import { BarsIcon } from "../components/BarsIcon";
import Logo from '../components/Logo';

export default function Index() {

    useEffect(()=>{
        let m=true;
        (async ()=>{

            const response=await fetch(`${apiBaseUrl}questions`);
            if(!m){return;}

            const questions:Question[]=await response.json();
            if(!m){return;}

            console.log('Questions',questions)
        })();
        return ()=>{
            m=false;
        }
    },[])

    return (
        <div className="Index">

            <h1>Battle Time 🥳</h1>


            <p>The source for this page is located at - packages/battle-app/pages/index.tsx</p>

            <BarsIcon/>

            <Logo/>


            <img alt="Silly kids 👩🏼‍🚀" src="/images/image-1.png"/>

            <style jsx>{`
                .Index{
                    display:flex;
                    flex-direction:column;
                    flex:1;
                    align-items:center;
                    gap:20px;
                }
                h1{
                    color:#4EAF90;
                    margin:40px 0 0 0
                }
                p{
                    margin:0;
                }
                img{
                    width:50vw;
                    height:50vh;
                    object-fit:contain;
                }
            `}</style>
        </div>
    );
}

