"use client";

import {useState} from "react";

export const DudeMeter = () => {
  const [value, setValue] = useState<number>(2)
  return (
    <div className={'flex flex-row items-center gap-1 w-80'}>
      <div className="avatar flex flex-col">
        <div className="w-12 mask mask-squircle">
          <img src="/booring_teacher.jpg" alt={'Teacher logo'}/>
        </div>
        <p className={'text-xs text-center font-bold text-blue-600'}>Teacher</p>
      </div>
      <div className={'px-1'}>
        <input type="range" min="1" max="5" value={value} className="range range-sm range-primary" step="1"
               onChange={(e) => setValue(Number(e.target.value))}/>
      </div>
      <div className="avatar flex flex-col">
        <div className="w-12 mask mask-squircle">
          <img src="/dude.jpg" alt={'Dude logo'}/>
        </div>
        <p className={'text-xs text-center font-bold text-blue-600'}>Dude</p>
      </div>
    </div>

  )
}
