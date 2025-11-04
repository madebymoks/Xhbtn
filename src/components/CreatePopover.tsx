import React from 'react'
import { IonFab, IonFabButton, IonIcon, IonButton, IonContent, IonPopover, IonList } from '@ionic/react';
import { imageOutline, cubeOutline, textOutline } from 'ionicons/icons';
import CreateListItem from './CreateListItem';


interface CreatePopoverProps {
    trigger: string;
    openImage: () => void;
    openModel: () => void;
    openText: () => void;
    openColor: () => void;
    color: string;
}

const CreatePopover = ({ trigger, openImage, openModel, openText, openColor, color }: CreatePopoverProps) => {

    const menuList = [
        { icon: imageOutline, label: "Insert an image", type: "image" },
        { icon: cubeOutline, label: "Insert an 3D Model", type: "model" },
        { icon: textOutline, label: "Insert 3D text", type: "text" },
        { icon: null, label: "Select a color" , type: "color"},
    ]

    const openItem = (value: string) => {
        if(value === "image"){
            openImage()
        } else if(value === "model"){
            openModel()
        } else if(value === "text"){
            openText()
        } else {
            openColor()
        }
    }

    return (
        <IonPopover className='rounded-lg' trigger={trigger} dismissOnSelect={true}>
            {/*<IonContent class="ion-padding">Hello World!</IonContent>*/}
            <div className='w-full bg-slate-400/50'>
                <IonList className='create-list' lines='none'>
                    {menuList.map((item, index) => (
                        <CreateListItem createAction={() => openItem(item.type)} key={index} label={item.label} icon={item.icon} color={color} />
                    ))}
                </IonList>
            </div>
        </IonPopover>
    )
}

export default CreatePopover