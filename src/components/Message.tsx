import { useCensorship } from "../hooks/useCensorship"

export function Message(props: { message: string, placeholder?: string }) {
  const message = useCensorship(props.message || '');
  if (!props.message && props.placeholder) {
    return <div className="message"><span className="message-placeholder">{props.placeholder}</span></div>
  }
  return <div className="message">{message}</div>
}
