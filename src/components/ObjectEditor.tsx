import React, { useState } from 'react'
import { IonItem, IonLabel, IonList, IonToolbar, IonButtons, IonButton, IonIcon } from '@ionic/react';
import { expandOutline, colorPaletteOutline, pencilOutline } from 'ionicons/icons';
import Editor from './Editor';
import ObjectColorPicker from './ObjectColorPicker';
import TextEditor from './TextEditor';



interface ObjectEditorType {
    color: any,
    setColor: any,
    closeColorPicker: () => void,
    postType: string,
    text: string,
    editText: any
}

const ObjectEditor: React.FC<ObjectEditorType> = ({ color, setColor, closeColorPicker, postType, text, editText }) => {

    const [type, setType] = useState("position")

    const setPosition = () => {
        console.log("position")
    }

    const setHeight = () => {
        console.log("height")
    }

    const openEdit = () => {
        setType("edit")
    }

    const openPosition = () => {
        setType("position")
    }

    const openColor = () => {
        setType("color")
    }

    return (
        <div className='relative w-11/12 h-auto mx-auto mt-auto flex flex-row p-1 z-30'>

            <div className='w-auto h-full flex flex-col mt-auto'>

                <div className='w-full h-auto bg-gray-500/70 border border-white/60 p-2 rounded-lg flex flex-col'>

                    {postType === "3Dtext" &&
                        <div className={`w-auto h-auto flex items-center justify-center aspect-square mb-2 rounded-lg ${type === "edit" && 'border-[0.5px] border-white'}`}>
                            <IonButton onClick={openEdit} size="small" fill="clear">
                                <IonIcon className='text-white' slot="icon-only" icon={pencilOutline} />
                            </IonButton>
                        </div>
                    }

                    <div className={`w-auto h-auto flex items-center justify-center aspect-square mb-2 rounded-lg ${type === "position" && 'border-[0.5px] border-white'}`}>
                        <IonButton onClick={openPosition} size="small" fill="clear">
                            <IonIcon className='text-white' slot="icon-only" icon={expandOutline} />
                        </IonButton>
                    </div>

                    {(postType === "text" || postType === "3Dtext") &&
                        <div className={`w-auto h-auto flex items-center justify-center aspect-square rounded-lg ${type === "color" && 'border-[0.5px] border-white'}`}>
                            <IonButton onClick={openColor} size="small" fill="clear">
                                <IonIcon className='text-white' slot="icon-only" icon={colorPaletteOutline} />
                            </IonButton>
                        </div>
                    }

                </div>

            </div>

            {type === "edit" && <TextEditor text={text} editText={editText} />}
            {type === "position" && <Editor statex={0} statey={4} setState={setPosition} height={3} setHeight={setHeight} />}
            {type === "color" && <ObjectColorPicker color={color} handleChangeColor={setColor} />}

        </div>
    )
}

export default ObjectEditor