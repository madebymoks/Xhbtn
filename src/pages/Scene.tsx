import React, { useRef, useState, useEffect } from "react";
import {
    IonPage, IonButton, IonButtons, IonContent, IonHeader, IonItem, IonTitle, IonToolbar, useIonRouter,
    IonModal, IonInput, IonTextarea, IonLabel, IonIcon, IonList, IonFabButton, IonPopover
} from "@ionic/react"
import { chevronBack, checkmarkOutline, closeOutline } from "ionicons/icons"
import CreateFabButton from "../components/CreateFabButton";
import CreatePopover from "../components/CreatePopover";
import { useColor } from "react-color-palette";
import SceneColorPicker from "../components/SceneColorPicker";
import ObjectEditor from "../components/ObjectEditor";



const Scene = () => {

    const navigation = useIonRouter()
    const [color, setColor] = useColor("#696e6a")
    const [objectColor, setObjectColor] = useColor("#696e6a")
    const [editor, setEditor] = useState(false)
    const [editColor, setEditColor] = useState(false)
    const [editObject, setEditObject] = useState(false)
    

    const goBack = () => {
        navigation.push("/search")
    }

    const postObject = () => {
        console.log("open")
    }

    const closeEditor = () => {
        setEditor(!editor)
        setEditObject(!editObject)
    }

    const openImage = () => {
        console.log("open")
    }

    const openModel = () => {
        setEditor(!editor)
        setEditObject(!editObject)
        console.log("open model")
    }

    const openText = () => {
        console.log("open")
    }

    const openColor = () => {
        setEditor(!editor)
        setEditColor(!editColor)
    }

    const closeColorPicker = () => {
        setEditor(!editor)
        setEditColor(!editColor)
    }

    return (
        <IonPage>
            <IonHeader no-shadow={true} className="ion-no-border bg-transparent">
                <IonToolbar color="transparent">

                    {!editor &&
                        <IonButtons slot="start">
                            <IonButton onClick={goBack}>
                                <IonIcon slot="icon-only" color='dark' icon={chevronBack} />
                            </IonButton>
                        </IonButtons>
                    }

                    {editObject &&
                    <>
                        <IonButtons slot="start">
                            <IonButton onClick={postObject}>
                                <IonIcon slot="icon-only" color='dark' icon={checkmarkOutline} />
                            </IonButton>
                        </IonButtons>
                        <IonButtons slot="end">
                            <IonButton onClick={closeEditor}>
                                <IonIcon slot="icon-only" color='dark' icon={closeOutline} />
                            </IonButton>
                        </IonButtons>
                    </>
                    }

                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>

                <div className="w-full h-full bg-blue-300"></div>

                {editColor && <SceneColorPicker color={color} handleChangeColor={setColor} closeColorPicker={closeColorPicker} />}

                {editObject && <ObjectEditor  color={color} setColor={setColor} closeColorPicker={closeEditor} />}

                {!editor &&
                    <>
                        <CreatePopover trigger={'popover'} openImage={openImage} openModel={openModel} openText={openText} openColor={openColor} />
                        <CreateFabButton id={'popover'} />
                    </>
                }
            </IonContent>
        </IonPage>
    )
}

export default Scene