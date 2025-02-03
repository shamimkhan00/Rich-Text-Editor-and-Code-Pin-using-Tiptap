import parse from 'html-react-parser';
import { useEffect, useState } from 'react';
import Styles from './Styles/DisplayText.module.css'
import { Like } from './like';
import { MdRecordVoiceOver } from "react-icons/md";


const test = "<p>Hello !! Shamim Khan this side</p><p>Text to Speech</p><p>Code Pin</p>";

export const DisplayText = ({ text }) => {
    const [displaytext, changeDisplaytext] = useState([test]);


    const handlevoice = (data) => {
        console.log(data);
        if (Object.getPrototypeOf(data)['constructor'] != Array) {
            const text = (data.props['children'])
            const value = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(value);
        } else {
            data.map((item, index) => {
                const text = (item.props['children'])
                const value = new SpeechSynthesisUtterance(text);
                window.speechSynthesis.speak(value);
            })
        }
    }


    useEffect(() => {
        if (!text == '') {
            changeDisplaytext([...displaytext, text]);
        }


    }, [text]);

    // console.log(displaytext)

    return (
        <div className={Styles.displayBox}>
            {displaytext.map((data, index) => (
                <div key={index}>
                    <div className={Styles.comment}>
                        {parse(data)}
                    </div>
                    <div className={Styles.reaction}>
                        <Like></Like>
                        <button onClick={() => { handlevoice(parse(data)) }}>
                            <MdRecordVoiceOver /> 
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}