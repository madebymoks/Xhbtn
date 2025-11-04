import React from 'react'
import { IonInput } from '@ionic/react';
import { Keyboard } from '@capacitor/keyboard';



interface TextEditorType {
    text: string,
    editText: any,
}

const TextEditor = ({ text, editText }: TextEditorType) => {
    return (
        <div className='relative w-3/4 h-16 p-1 bg-gray-500/70 border border-white/60 rounded-lg ml-6 mt-auto flex flex-row'>

            <IonInput value={text} onIonChange={editText} fill="outline" placeholder="Enter text" />

        </div>
    )
}

export default TextEditor