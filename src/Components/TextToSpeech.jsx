import { Extension } from '@tiptap/core';
import parse from 'html-react-parser';

const TextToSpeech = Extension.create({
    name: 'textToSpeech',

    addCommands() {
        return {
            textToSpeech: () => ({ editor }) => {
                const content = editor.getHTML();
                const data = parse(content);

                if (Object.getPrototypeOf(data)['constructor'] !== Array) {
                    const text = data.props['children'];
                    const value = new SpeechSynthesisUtterance(text);
                    window.speechSynthesis.speak(value);
                } else {
                    data.forEach((item) => {
                        const text = item.props['children'];
                        const value = new SpeechSynthesisUtterance(text);
                        window.speechSynthesis.speak(value);
                    });
                }
                return true;
            },
        };
    },
});

export default TextToSpeech;