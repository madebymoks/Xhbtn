import React, { Component, ReactNode } from 'react';
import { IonItem, IonLabel, IonList, IonToolbar, IonButtons, IonButton, IonIcon } from '@ionic/react';


interface CreateListItemProps {
    label: string
    icon: any;
    createAction: () => void;
}

const CreateListItem: React.FC<CreateListItemProps> = ({ label, icon, createAction }) => {
    return (
        <IonItem className='create-list' onClick={createAction}>
                <p className='text-xs'>{label}</p>
                <IonButtons slot='end'>
                    <IonButton>
                        <IonIcon slot="icon-only" size='small' color='dark' icon={icon} />
                    </IonButton>
                </IonButtons>
        </IonItem>
    )
}

export default CreateListItem