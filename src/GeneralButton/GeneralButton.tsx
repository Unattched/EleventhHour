import React from "react";
import "./GeneralButton.css"
interface Props {
    type: "button" | "submit" | "reset",
    img: string | null,
    text: string
    onClick?: () => void,
}

const GeneralButton: React.FC<Props> = (Props) => {
    let img = Props.img;
    return (
        <div>
            {
                img === null ?
                    <button className={"center-horizontal "} id={"GeneralButton"} type={Props.type} onClick={Props.onClick}>
                        {Props.text}
                    </button>
                    :
                    
                <div>
                    <button className={"center-horizontal "} id={"GeneralButton"} type={Props.type} onClick={Props.onClick}>
                        <img className={"image"} src={img} alt={"bebras"}/>
                        <p>{Props.text}</p>
                    </button>
                </div>

            }
        </div>
    );
};

export default GeneralButton;