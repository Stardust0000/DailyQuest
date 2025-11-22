import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import '../exitStyle.css';

export default function Exit() {
    const navigate = useNavigate();
    const[stage, setStage] = useState(1);
    const[glitch, setGlitch] = useState(false);

    useEffect(() => {
        if(glitch) {
            const timer = setTimeout(()=>{
                navigate("/");
            }, 3000);
        return() => clearTimeout(timer);
        }
    }, [glitch, navigate]);

    if (glitch) {
        return (
            <div className="glitch-container">
                <h1 className="glitch-text">SYSTEM PROCESSING REQUEST....</h1>
                <div className="loading-bar">
                    <div className="loading-fill"></div>
                </div>
                <h2 className="glitch-error">REQUEST DENIED.</h2>
            </div>
        );
    }

    // Stage 1 confirmation
    if (stage === 1) {
        return (
            <>
            <h1>Are You Sure Player?</h1>
            <button onClick={() => setStage(2)}>YES</button>
            <button onClick={() => navigate("/")}>NO</button>
            </>
        );
    }
   // Stage 2 confirmation
    if (stage === 2) {
        return (
            <>
            <h1>Are you REALLY sure?</h1>
            <button onClick={() => setStage(3)}>YES</button>
            <button onClick={() => navigate("/")}>NO</button>
            </>
        );
    }
    // Stage 3 confirmation
    if (stage === 3) {
        return (
            <>
            <h1>Are You Sure Player?</h1>
            <button onClick={() => setGlitch(true)}>YES</button>
            <button onClick={() => setGlitch(true)}>YESS</button>
            </>
        );
    }
}