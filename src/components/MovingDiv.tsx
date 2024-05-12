// Moving Div component

type Props = {
  duration: number
  delay: number
  classname?: string
  idVar?: string
  children: React.ReactNode
}

export default function MovingDiv({ duration, delay, classname, idVar, children }: Props) {
  const movingDivStyle = {
    animationName: 'movingDiv',
    animationDuration: `${duration}ms`,
    animationFillMode: 'both',
    animationTimingFunction: 'cubic-bezier(0, 0, 0.4, 1)',
    animationDelay: `${delay}ms`,
  }

  return (
    <div style={movingDivStyle} className={classname} id={idVar}>
      {children}
    </div>
  )
}
