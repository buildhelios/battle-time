import { apiBaseUrl, newTipOfTheDay, Question, tipOfTheDaySubject } from "@battle-time/common";
import { atDotCss } from '@iyio/at-dot-css';
import { useSubject, View } from '@iyio/react-common';
import { useEffect } from "react";
import { BarsIcon } from "../components/BarsIcon";
import { Logo } from '../components/Logo';

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
    },[]);

    const tipOfTheDay=useSubject(tipOfTheDaySubject);

    return (
        <div className={style.root()}>

            <h1 className={style.header()}>Battle Time 🥳</h1>


            <p>The source for this page is located at - packages/battle-app/pages/index.tsx</p>

            <BarsIcon/>

            <Logo/>

            <img className={style.img()} alt="Silly kids 👩🏼‍🚀" src="/images/image-1.png"/>

            <View col g1>
                <p>Tip of the day - {tipOfTheDay}</p>
                <button onClick={newTipOfTheDay}>New tip</button>
            </View>

        </div>
    );
}

// About at-dot-css - https://npmjs.com/package/@iyio/at-dot-css
// Syntax highlighting for css - https://marketplace.visualstudio.com/items?itemName=IYIO.high-js
const style=atDotCss({name:'IndexPage',css:`
    @.root{
        display:flex;
        flex-direction:column;
        flex:1;
        align-items:center;
        gap:20px;
        padding:1rem;
    }
    @.header{
        color:#4EAF90;
        margin:40px 0 0 0
    }
    @.root p{
        margin:0;
    }
    @.img{
        width:50vw;
        height:50vh;
        object-fit:contain;
    }
`});
