import React, { useState } from 'react'
import { IonItem, IonLabel, IonList, IonToolbar, IonButtons, IonButton, IonIcon } from '@ionic/react';
import { expandOutline, colorPaletteOutline } from 'ionicons/icons';
import Editor from './Editor';
import ObjectColorPicker from './ObjectColorPicker';



interface ObjectEditorType {
    color: any,
    setColor: any,
    closeColorPicker: () => void
}

const ObjectEditor: React.FC<ObjectEditorType> = ({ color, setColor, closeColorPicker }) => {

    const [type, setType] = useState("position")

    const setPosition = () => {
        console.log("position")
    }

    const setHeight = () => {
        console.log("height")
    }

    const openPosition = () => {
        setType("position")
    }

    const openColor = () => {
        setType("color")
    }

    return (
        <div className='fixed w-11/12 h-auto left-1/2 -translate-x-1/2 mx-auto bottom-2 flex flex-row p-1 z-30'>

            <div className='w-auto h-full flex flex-col mt-auto'>

                <div className='w-full h-auto bg-gray-400/70 py-2 px-1 rounded-lg flex flex-col'>

                    <div className={`w-auto h-auto flex items-center justify-center aspect-square mb-2 rounded-lg ${type === "position" && 'border-[0.5px] border-white'}`}>
                        <IonButton onClick={openPosition} size="small" fill="clear">
                            <IonIcon color='dark' slot="icon-only" icon={expandOutline} />
                        </IonButton>
                    </div>

                    <div className={`w-auto h-auto flex items-center justify-center aspect-square rounded-lg ${type === "color" && 'border-[0.5px] border-white'}`}>
                        <IonButton onClick={openColor} size="small" fill="clear">
                            <IonIcon color='dark' slot="icon-only" icon={colorPaletteOutline} />
                        </IonButton>
                    </div>

                </div>

            </div>

            {type === "position" && <Editor statex={0} statey={4} setState={setPosition} height={3} setHeight={setHeight} />}
            {type === "color" && <ObjectColorPicker color={color} handleChangeColor={setColor} />}

        </div>
    )
}

export default ObjectEditor