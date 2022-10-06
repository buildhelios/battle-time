export default function GlobalStyles()
{
    return (
        <style global jsx>{`
            html,body{
                margin:0;
                padding:0;
            }
            body{
                font-family:Courier New;
                background-color:#000;
                color:#fff;
            }
            .svg-icon{
                fill:#fff;
            }
        `}</style>
    )
}
