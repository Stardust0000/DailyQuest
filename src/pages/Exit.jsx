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
            <div className="system-landing">
                <div className="system-window">
            <h1>Are You Sure Player?</h1>
            <div className="system-buttons">
            <button className="sys-btn yes" onClick={() => setStage(2)}>YES</button>
            <button className="sys-btn no" onClick={() => navigate("/")}>NO</button>
            </div>
            </div>
            </div>
        );
    }
   // Stage 2 confirmation
    if (stage === 2) {
        return (
             <div className="system-landing">
                <div className="system-window">
            <h1>Are you REALLY sure?</h1>
             <div className="system-buttons">
            <button className="sys-btn yes" onClick={() => setStage(3)}>YES</button>
            <button className="sys-btn no" onClick={() => navigate("/")}>NO</button>
            </div>
            </div>
            </div>
        );
    }
    // Stage 3 confirmation
    if (stage === 3) {
        return (
            <div className="system-landing">
                <div className="system-window">
                    <h1>SYSTEM SAYS NO.</h1>
                    <div className="system-buttons">
                        <button className="sys-btn" onClick={() => setGlitch(true)}>HUH??</button>
                        <button className="sys-btn" onClick={() => setGlitch(true)}>NO !</button>
                    </div>
                </div>
            </div>
        );
    }
}