import { useCensorship } from "../hooks/useCensorship"

export function Message(props: { message: string, placeholder?: string }) {
  if (!props.message && props.placeholder) {
    return <div className="message"><span class="message-placeholder">{props.placeholder}</span></div>
  }
  const message = useCensorship(props.message);
  return <div className="message">{message}</div>
}
