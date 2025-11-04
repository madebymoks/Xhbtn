import React, { Component, ReactNode } from 'react';
import { IonItem, IonLabel, IonList, IonToolbar, IonButtons, IonButton, IonIcon } from '@ionic/react';


interface CreateListItemProps {
    label: string
    icon: any;
    createAction: () => void;
    color: string;
}

const CreateListItem: React.FC<CreateListItemProps> = ({ label, icon, createAction, color }) => {
    return (
        <IonItem className='create-list' onClick={createAction}>
            <p className='text-xs'>{label}</p>
            <IonButtons slot='end'>
                {icon ?
                    <IonButton>
                        <IonIcon slot="icon-only" size='small' color='dark' icon={icon} />
                    </IonButton>
                    :
                    <div style={{ backgroundColor: `${color}` }} className='w-5 h-5 border border-white rounded-md mr-[10px]' />
                }
            </IonButtons>
        </IonItem>
    )
}

export default CreateListItem