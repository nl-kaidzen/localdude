"use client";

import {useState} from "react";

export type AutosizeTextareaProps = {
  addMessage: (message: string) => void
}
export const AutosizeTextarea = ({ addMessage }: AutosizeTextareaProps) => {
  const [value, setValue] = useState<string>("")

  const handleSubmit = () => {
    addMessage(value)
    setValue('')
  }

  return (
    <div className={'flex flex-row gap-2 mt-auto max-w-screen-sm w-full mx-auto'}>
      <textarea placeholder="Ask LocalDude AI" value={value} className="textarea textarea-bordered textarea-xs w-full"
                rows={Math.min(value.split('\n').length, 8)} onChange={(e) => setValue(e.target.value)} />
      <button className="btn btn-primary btn-sm" onClick={handleSubmit}>
        Ask
      </button>
    </div>
  )
}
