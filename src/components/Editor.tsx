import React from 'react'
import Position from './Position';
import Height from './Height';



interface EditorType {
    statex: number,
    statey: number,
    setState: any,
    height: number,
    setHeight: any,
}

const Editor: React.FC<EditorType> = ({ statex, statey, setState, height, setHeight }) => {
    return (
        <div className='w-auto h-[200px] bg-gray-400/70 rounded-lg ml-6 flex flex-row'>

            <div className='w-[200px] h-[200px] p-3'>
                <Position statex={statex} statey={statey} setState={setState} />
            </div>

            <div className='w-10 h-full py-3 pr-3'>
                <Height height={height} setHeight={setHeight} />
            </div>

        </div>

    )
}

export default Editor