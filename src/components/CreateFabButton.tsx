import React from 'react'
import { IonFab, IonFabButton, IonIcon, IonButton } from '@ionic/react';
import { add } from 'ionicons/icons';


interface CreateFabButtonProps {
    id: string;
}

const CreateFabButton = ({id}: CreateFabButtonProps) => {
    return (
            <IonFab slot="fixed" vertical="bottom" horizontal="end">
                <div id={id} className='w-10 h-10 py-[11px] bg-gray-500/70 border border-white/40 text-center align-middle items-center justify-center rounded-lg'>
                    <IonIcon className='text-white' slot="icon-only" size='small' icon={add}></IonIcon>
                </div>
            </IonFab>
    )
}

export default CreateFabButton