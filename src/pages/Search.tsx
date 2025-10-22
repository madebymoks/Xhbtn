import React, { useState, useRef, useEffect } from 'react';
import {
    IonButton, IonContent, IonHeader,
    IonPage, IonIcon, IonToolbar, IonButtons, IonBackButton,
    IonItem, IonAvatar, IonTitle, IonText, useIonRouter,
    IonModal
} from '@ionic/react';
import { createOutline, qrCodeOutline, addOutline, logoFacebook, logoTwitter, logoInstagram, logoLinkedin } from "ionicons/icons"



const Search = () => {
    return (
        <IonPage>
            <IonHeader class="ion-no-border">
                <IonToolbar>

                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>

            </IonContent>
        </IonPage>
    )
}

export default Search