import { BarsIcon } from "../components/BarsIcon";
import Logo from '../components/Logo';

export function Index() {
    return (
        <div className="Index">

            <h1>Battle Time 🥳</h1>

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
                    color:#9A4264;
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

export default Index;
