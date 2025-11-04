import React from 'react'
import { IonIcon } from '@ionic/react';
import { ColorPicker } from "react-color-palette";
import "react-color-palette/css";
import { checkmarkOutline, closeOutline } from "ionicons/icons"

interface ColorPickerType {
  color: any,
  handleChangeColor: any,
}

const SceneColorPicker: React.FC<ColorPickerType> = ({ color, handleChangeColor }) => {
  return (
    <div className='fixed w-3/5 bg-gray-500/70 border border-white/60 right-2 bottom-2 h-auto rounded-lg p-2 z-30'>
      <ColorPicker hideInput={["rgb", "hsv"]} color={color} onChange={handleChangeColor} />
    </div>
  )
}

export default SceneColorPicker