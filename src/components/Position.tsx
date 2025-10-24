import React from 'react'
import Slider from "react-input-slider"



interface PositionType {
    statex: number,
    statey: number,
    setState: any,
}

const Position: React.FC<PositionType> = ({ statex, statey, setState }) => {
    return (
        <div className="relative w-full aspect-square mx-auto my-auto">
            <Slider
                styles={{
                    track: {
                        backgroundColor: 'gray',
                        width: '100%',
                        height: '100%',
                        aspectRatio: '1 / 1',
                        margin: '0 auto',
                        borderRadius: 8,
                        opacity: 0.7
                    }
                }}
                axis="xy"
                xmax={35}
                ymax={35}
                xmin={-35}
                ymin={-35}
                x={statex}
                y={statey}
                xstep={0.01}
                ystep={0.01}
                onDragEnd={(event) => event.preventDefault()}
                onChange={setState}
            />
        </div>
    )
}

export default Position