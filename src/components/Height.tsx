import React from 'react'
import { IonIcon } from "@ionic/react"
import { chevronUpOutline, chevronDownOutline } from "ionicons/icons"
import Slider from "react-input-slider"


interface HeightType {
    height: number,
    setHeight: any,
}

const Height: React.FC<HeightType> = ({ height, setHeight }) => {
    return (
        <>
            <div className="w-full h-[10%] text-center align-middle">
                <IonIcon className="fab-button-icon text-xs" icon={chevronUpOutline} />
            </div>
            <div className="w-full h-4/5 py-2">
                <Slider
                    styles={{
                        track: {
                            backgroundColor: 'gray',
                            width: '40%',
                            height: '100%',
                            marginLeft: '30%',
                            opacity: 0.7
                        },
                        thumb: {
                            width: '12px',
                            height: '12px'
                        },
                        active: {
                            backgroundColor: 'transparent'
                        }
                    }}
                    axis="y"
                    ymax={15}
                    ymin={-1.5}
                    y={height}
                    ystep={0.05}
                    yreverse={true}
                    onDragEnd={(event) => event.preventDefault()}
                    onChange={setHeight}
                />
            </div>
            <div className="w-full h-[10%] text-center align-middle">
                <IonIcon className="fab-button-icon text-xs" icon={chevronDownOutline} />
            </div>
        </>
    )
}

export default Height