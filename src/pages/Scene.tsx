import React, { useRef, useState, useEffect } from "react";
import {
    IonPage, IonButton, IonButtons, IonContent, IonHeader, IonItem, IonTitle, IonToolbar, useIonRouter,
    IonModal, IonInput, IonTextarea, IonLabel, IonIcon, IonList, IonFabButton, IonPopover
} from "@ionic/react"
import { chevronBack, addOutline, logoFacebook, logoTwitter, logoInstagram } from "ionicons/icons"
import CreateFabButton from "../components/CreateFabButton";
import CreatePopover from "../components/CreatePopover";



const Scene = () => {

    const navigation = useIonRouter()
    const [showPopover, setShowPopover] = useState(false);

    const goBack = () => {
        navigation.push("/search")
    }

    return (
        <IonPage>
            <IonHeader class="ion-no-border">
                <IonToolbar>
                    <IonButtons>
                        <IonButton onClick={goBack}>
                            <IonIcon slot="icon-only" color='dark' icon={chevronBack} />
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <CreatePopover isOpen={showPopover} onDidDismiss={() => setShowPopover(false)} />
                <CreateFabButton onClick={() => setShowPopover(!showPopover)} />
            </IonContent>
        </IonPage>
    )
}

export default Scene