import React from 'react'
import { IonIcon } from '@ionic/react';
import { ColorPicker } from "react-color-palette";
import "react-color-palette/css";
import { checkmarkOutline, closeOutline } from "ionicons/icons"



interface ColorPickerType {
  color: any,
  handleChangeColor: any,
}

const ObjectColorPicker: React.FC<ColorPickerType> = ({ color, handleChangeColor }) => {
  return (
    <div className='w-3/5 bg-gray-500/70 border border-white/60 ml-6 rounded-lg p-1'>
      <ColorPicker hideInput={["hex", "rgb", "hsv"]} color={color} onChange={handleChangeColor} />
    </div>
  )
}

export default ObjectColorPicker