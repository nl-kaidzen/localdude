'use client';

import {useState} from "react";
import {AutosizeTextarea} from "@/components/custom/AutosizedTextarea";
import {Disclaimer} from "@/components/custom/Disclaimer";
import {DudeMeter} from "@/components/custom/DudeMeter";

export const ChatView = () => {
  const [messages, setMessages] = useState<string[]>([])

  const addMessage = (message: string) => {
    setMessages([...messages, message])
  }
  return (
    <div className="drawer-content p-4 h-full flex flex-col flex-1 max-h-screen bg-base-200">
      <DudeMeter />
      <div className={'container overflow-y-auto'}>
        <div className={'flex flex-1 flex-col py-4 max-w-screen-sm mx-auto'}>
          {messages.map((message, index) => (
            <div key={index} className={'flex flex-row gap-2 py-2'}>
              <div
                className={'w-12 h-12 inline-flex items-center justify-center rounded-full bg-primary/20 text-primary'}>
                <span className={'text-2xl'}>🤖</span>
              </div>
              <div className={'flex flex-col'}>
                <span className={'font-bold'}>LocalDUDE</span>
                <span>{message}</span>
              </div>
            </div>
          ))
          }
        </div>
      </div>
      <div>

      </div>
      <AutosizeTextarea addMessage={addMessage}/>
      <Disclaimer/>
    </div>
  )
}
