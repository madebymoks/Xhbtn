import React from 'react'
import { IonFab, IonFabButton, IonIcon, IonButton } from '@ionic/react';
import { add } from 'ionicons/icons';


interface CreateFabButtonProps {
    onClick: () => void;
}

const CreateFabButton = ({onClick}: CreateFabButtonProps) => {
    return (
            <IonFab slot="fixed" vertical="bottom" horizontal="end">
                <div onClick={onClick} className='w-10 h-10 py-[11px] bg-gray-400/50 border-[0.5px] border-white/40 text-center align-middle items-center justify-center rounded-lg'>
                    <IonIcon slot="icon-only" size='small' icon={add}></IonIcon>
                </div>
            </IonFab>
    )
}

export default CreateFabButton