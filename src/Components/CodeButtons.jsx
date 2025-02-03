import { useState } from 'react';
import Styles from './Styles/Buttons.module.css';
import { FaItalic } from "react-icons/fa";
import { FaBold } from "react-icons/fa";

export const CodeButtons = ({ editor, content, changeButton }) => {


    const changetoCode = () => {
        changeButton('textButton')

    }

    const [selectedLang, setSelectedLang] = useState("javascript");
    const [copied, setCopied] = useState(false);


    const languages = ["javascript", "python", "html", "css"];

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
        editor.commands.updateNode('codeBlock', { language: event.target.value }); 
    };

    const setCodeLanguage = (lang) => {
        editor.chain().focus().setCodeBlock({ language: lang }).run();
        setSelectedLang(lang);
    };

    

    const handleCopy = () => {
        navigator.clipboard.writeText(editor.getHTML());
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
    };

    return (
        <div className={Styles.Mainbox}>
            <div className={Styles.buttonBox}>

                <button
                    onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                    className={`${editor.isActive('codeBlock')} ? ${Styles.isactive} : ''`}
                >
                    Toggle
                </button>

                <select className={Styles.language} value={selectedLang} onChange={(e) => setCodeLanguage(e.target.value)}>
                    {languages.map((lang) => (
                        <option key={lang} value={lang}>
                            {lang}
                        </option>
                    ))}
                </select>

                <button
                    onClick={handleCopy}
                >
                    {copied ? "Copied!" : "Copy"}
                </button>




            </div>
            <div className={Styles.buttonBox}>
                <button
                    onClick={changetoCode}

                >
                    CODE
                </button>
            </div>


        </div>
    )
}