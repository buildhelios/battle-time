import { Battle } from "../components/Battle";
import { BattlePrep } from "../components/BattlePrep";
import React from "react";
import RootLayout from "../layouts/root-layout";

export default function Home() {
    const [started, setStarted] = React.useState(false);

    return (
        <RootLayout >
            {
                !started ? <BattlePrep onStart={() => setStarted(true)} /> : <Battle />
            }
        </RootLayout>
    );
}

