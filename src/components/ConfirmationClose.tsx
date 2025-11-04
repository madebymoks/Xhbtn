import React, { useRef, useState, useEffect } from "react";
import {
    IonPage, IonButton, IonButtons, IonContent, IonHeader, IonItem, IonTitle, IonToolbar, useIonRouter,
    IonModal, IonInput, IonTextarea, IonLabel, IonIcon, IonList, IonFabButton, IonPopover
} from "@ionic/react"
import { chevronBack, checkmarkOutline, closeOutline } from "ionicons/icons"


interface ConfirmationCloseProps {
    postObject: () => void;
    closeEditor: () => void;
}

const ConfirmationClose:React.FC<ConfirmationCloseProps>= ({ postObject, closeEditor }) => {
    return (
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
    )
}

export default ConfirmationClose