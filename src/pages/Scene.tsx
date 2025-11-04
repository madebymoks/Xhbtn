import React, { useRef, useState, useEffect } from "react";
import {
    IonPage, IonButton, IonButtons, IonContent, IonHeader, IonItem, IonTitle, IonToolbar, useIonRouter,
    IonModal, IonInput, IonTextarea, IonLabel, IonIcon, IonList, IonFabButton, IonPopover
} from "@ionic/react"
import { chevronBack, checkmarkOutline, closeOutline } from "ionicons/icons"
import CreateFabButton from "../components/CreateFabButton";
import CreatePopover from "../components/CreatePopover";
import { useColor } from "react-color-palette";
import "react-color-palette/css";
import SceneColorPicker from "../components/SceneColorPicker";
import ObjectEditor from "../components/ObjectEditor";
import ConfirmationClose from "../components/ConfirmationClose";
import CreateScene from "../components/CreateScene";



const Scene = () => {

    const navigation = useIonRouter()
    const [color, setColor] = useColor("#696e6a")
    const [old, setOld] = useColor("#696e6a")
    const [objectColor, setObjectColor] = useColor("#696e6a")
    const [editor, setEditor] = useState(false)
    const [editColor, setEditColor] = useState(false)
    const [editObject, setEditObject] = useState(false)
    const [postType, setPostType] = useState("")
    const [text, setText] = useState("")


    const goBack = () => {
        navigation.push("/search")
    }

    const postObject = () => {
        setEditor(!editor)
        setEditColor(!editColor)
        setPostType("")
    }

    const closeEditor = () => {
        setEditor(!editor)
        setEditObject(!editObject)
        setPostType("")
    }

    const openImage = () => {
        setEditor(!editor)
        setEditObject(!editObject)
        setPostType("image")
    }

    const openModel = () => {
        setEditor(!editor)
        setEditObject(!editObject)
        setPostType("model")
    }

    const open3DText = () => {
        setEditor(!editor)
        setEditObject(!editObject)
        setPostType("3Dtext")
    }

    const openColor = () => {
        setOld(color)
        setEditor(!editor)
        setEditColor(!editColor)
    }

    const setSceneColor = () => {
        setEditor(!editor)
        setEditColor(!editColor)
    }

    const closeColorPicker = () => {
        setColor(old)
        setEditor(!editor)
        setEditColor(!editColor)
    }

    const editText = (event: any) => {
        setText(event.targer.value)
    }

    return (
        <IonPage>
            <IonHeader no-shadow={true} class="ion-no-border">
                <IonToolbar color="transparent">

                    {!editor &&
                        <IonButtons slot="start">
                            <IonButton onClick={goBack}>
                                <IonIcon slot="icon-only" color='dark' icon={chevronBack} />
                            </IonButton>
                        </IonButtons>
                    }

                    {(editObject || editColor) && <ConfirmationClose postObject={editObject ? postObject : setSceneColor} closeEditor={editObject ? closeEditor : closeColorPicker} />}

                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>

                <div style={{ backgroundColor: `${color.hex}` }} className="w-full h-full flex flex-col pb-2">

                    <CreateScene color={color.hex} floorType={"mirror"} />

                    {editColor && <SceneColorPicker color={color} handleChangeColor={setColor} />}

                    {editObject && <ObjectEditor postType={postType} color={color} setColor={setColor} closeColorPicker={closeEditor} text={text} editText={editText} />}

                    {!editor &&
                        <>
                            <CreatePopover trigger={'popover'} openImage={openImage} openModel={openModel} openText={open3DText} openColor={openColor} color={color.hex} />
                            <CreateFabButton id={'popover'} />
                        </>
                    }

                </div>

            </IonContent>
        </IonPage>
    )
}

export default Scene