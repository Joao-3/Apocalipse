import { useCallback, useEffect, useRef, useState } from 'react'

export type ShowNotice = (message: string, durationSeconds?: number) => void

export function useNotice() {
  const [message, setMessage] = useState('')
  const timer = useRef<number | undefined>(undefined)

  const showNotice = useCallback<ShowNotice>((nextMessage, durationSeconds = 2.4) => {
    if (timer.current !== undefined) window.clearTimeout(timer.current)
    setMessage(nextMessage)
    if (!nextMessage) {
      timer.current = undefined
      return
    }

    timer.current = window.setTimeout(() => {
      setMessage('')
      timer.current = undefined
    }, Math.max(1, durationSeconds) * 1000)
  }, [])

  useEffect(() => () => {
    if (timer.current !== undefined) window.clearTimeout(timer.current)
  }, [])

  return { message, showNotice }
}
