import { useNavigate } from "react-router-dom";
import "../system.css";

export default function Landing() {
    const navigate = useNavigate();

    return(

        <div className="system-landing">
            <div className="system-window">
        <h1 className="system-title">NOTIFICATION</h1>
        <div className="system-message">
        <p className="system-message">
            You have acquired the qualification to be a <b><i> player </i></b></p>
        <p className="system-message">Will you accept?</p>
        </div>

            <div className="system-buttons">
            <button className="sys-btn yes" onClick={()=>navigate("/todo")}>YES</button>
            <button className="sys-btn no" onClick={() => navigate("/exit")}>NO</button>
            </div>
        </div>
        </div>
    )
}