type Props = { message: string }

export default function Notice({ message }: Props) {
  const className = ['notice', message ? 'visible' : ''].filter(Boolean).join(' ')
  return <p className={className} role="status" aria-live="polite">{message}</p>
}
