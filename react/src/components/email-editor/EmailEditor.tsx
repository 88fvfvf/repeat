import { Bold, Eraser, Italic, Underline } from 'lucide-react'
import styles from './style.module.scss'
import { useRef, useState } from 'react'
import { TStyle, applyStyle } from './apply-style'
import parse from 'html-react-parser'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { emailService } from '../../services/email.services'

function EmailEditor() {

  const [text, setText] = useState('')

  const [selectionStart, setSelectionStart] = useState(0)
  const [selectionEnd, setSelectionEnd] = useState(0)

  const queryClient = useQueryClient()

  const { mutate, isPending } = useMutation({
    mutationKey: ['create'],
    mutationFn: () => emailService.sendEmail(text),
    onSuccess() {
      setText('')
      queryClient.refetchQueries({queryKey: ['emailList']})
    }
  })

  const textRef = useRef<HTMLTextAreaElement | null>(null)

  const updateSelection = () => {
    if (!textRef.current) return;
    setSelectionStart(textRef.current.selectionStart)
    setSelectionEnd(textRef.current.selectionEnd)
  }

  const applyFormat = (type: TStyle) => {

    const selectedText = text.substring(selectionStart, selectionEnd)

    if (!selectedText) return

    const before = text.substring(0, selectionStart) // Text before select fragment

    const after = text.substring(selectionEnd)

    setText(before + applyStyle(type, selectedText) + after)

  }

  return (
    <div>
      <h1>Vite + React</h1>
      <div>
        <p>{parse(text)}</p>
      </div>
      <div className={styles.card}>
        <textarea
          ref={textRef}
          className={styles.editor}
          spellCheck='false'
          onSelect={updateSelection}
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <div className={styles.actions}>
          <div className={styles.tools}>
            <button onClick={() => setText('')}><Eraser size={16} /></button>
            <button onClick={() => applyFormat('bold')}><Bold size={16} /></button>
            <button onClick={() => applyFormat('italic')}><Italic size={16} /></button>
            <button onClick={() => applyFormat('underline')}><Underline size={16} /></button>
          </div>
          <button disabled={isPending} onClick={() => mutate()}>Send Now</button>
        </div>
      </div>
    </div>
  )
}

export default EmailEditor
