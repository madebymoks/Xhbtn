import React from 'react'
import { IonFab, IonFabButton, IonIcon, IonButton, IonContent, IonPopover, IonList } from '@ionic/react';
import { imageOutline, cubeOutline, textOutline } from 'ionicons/icons';
import CreateListItem from './CreateListItem';


interface CreatePopoverProps {
    isOpen: boolean;
    onDidDismiss: () => void;
}

const CreatePopover = ({ isOpen, onDidDismiss }: CreatePopoverProps) => {

    const menuList = [
        { icon: imageOutline, label: "Insert an image" },
        { icon: cubeOutline, label: "Insert an 3D Model" },
        { icon: textOutline, label: "Insert an text" },
    ]

    const openItem = () => {
        console.log("Item clicked")
    }

    return (
        <IonPopover isOpen={isOpen} onDidDismiss={onDidDismiss} side="top" alignment="end">
            {/*<IonContent class="ion-padding">Hello World!</IonContent>*/}
            <div className='w-full p-2 bg-slate-400/50 rounded-lg'>
                <IonList className='create-list' lines='none'>
                    {menuList.map((item, index) => (
                        <CreateListItem createAction={() => {openItem(); onDidDismiss()}} key={index} label={item.label} icon={item.icon} />
                    ))}
                </IonList>
            </div>
        </IonPopover>
    )
}

export default CreatePopover