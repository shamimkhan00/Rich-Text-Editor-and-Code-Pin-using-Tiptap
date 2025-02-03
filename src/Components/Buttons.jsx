import Styles from './Styles/Buttons.module.css';
import { FaUndo } from "react-icons/fa";
import { FaRedo } from "react-icons/fa";
import { FaItalic } from "react-icons/fa";
import { FaBold } from "react-icons/fa";
import { FaStrikethrough } from "react-icons/fa";
import { PiListBulletsBold } from "react-icons/pi";
import { MdRecordVoiceOver } from "react-icons/md";
import { FaHeading } from "react-icons/fa6";


export const Buttons = ({ editor, content ,changeButton }) => {

    const handleTextToSpeech = () => {
        editor.commands.textToSpeech();
    };

    const changetoCode = () =>{
        changeButton('CodeButtons')
    }

    return (
        <div className={Styles.Mainbox}>
            <div className={Styles.buttonBox}>
                <button
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    disabled={!editor.can().chain().focus().toggleBold().run()}
                    className={editor.isActive('bold') ? Styles['is-active'] : ''} // Use CSS module styles correctly
                >
                    <FaBold />
                </button>

                <button
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    disabled={
                        !editor.can()
                            .chain()
                            .focus()
                            .toggleItalic()
                            .run()
                    }
                    className={editor.isActive('italic') ? 'is-active' : ''}
                >
                    <FaItalic />
                </button>

                <button
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    disabled={
                        !editor.can()
                            .chain()
                            .focus()
                            .toggleStrike()
                            .run()
                    }
                    className={editor.isActive('strike') ? 'is-active' : ''}
                >
                    <FaStrikethrough />
                </button>

                <button
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={editor.isActive('bulletList') ? 'is-active' : ''}
                >
                    <PiListBulletsBold />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                    className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
                >
                    <FaHeading />
                </button>
                <button
                    onClick={() => editor.chain().focus().undo().run()}
                    disabled={
                        !editor.can()
                            .chain()
                            .focus()
                            .undo()
                            .run()
                    }
                >
                    <FaUndo />
                </button>
                <button
                    onClick={() => editor.chain().focus().redo().run()}
                    disabled={
                        !editor.can()
                            .chain()
                            .focus()
                            .redo()
                            .run()
                    }
                >
                    <FaRedo />
                </button>
                <button
                    onClick={handleTextToSpeech}
                >
                    <MdRecordVoiceOver />
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