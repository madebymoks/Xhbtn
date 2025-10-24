import React from 'react'
import { IonIcon } from '@ionic/react';
import { ColorPicker } from "react-color-palette";
import "react-color-palette/css";
import { checkmarkOutline, closeOutline } from "ionicons/icons"

interface ColorPickerType {
  color: any,
  handleChangeColor: any,
  closeColorPicker: () => void
}

const SceneColorPicker: React.FC<ColorPickerType> = ({ color, handleChangeColor, closeColorPicker }) => {
  return (
    <div className='fixed w-3/5 bg-gray-400/70 right-2 bottom-2 h-auto rounded-lg p-1 z-30'>
      <div className='w-ful h-10 flex flex-row'>
        <button className='w-10 h-10 mr-auto'>
          <IonIcon slot="icon-only" size='small' color='dark' icon={checkmarkOutline} />
        </button>
        <button onClick={closeColorPicker} className='w-10 h-10 ml-auto'>
          <IonIcon slot="icon-only" size='small' color='dark' icon={closeOutline} />
        </button>
      </div>
      <ColorPicker hideInput={["rgb", "hsv"]} color={color} onChange={handleChangeColor} />
    </div>
  )
}

export default SceneColorPicker