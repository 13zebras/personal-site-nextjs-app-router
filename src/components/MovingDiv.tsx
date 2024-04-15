export default function MovingDiv({ duration, delay, classVar, idVar, children }: { duration: number; delay: number; classVar?: string; idVar?: string; children: React.ReactNode }) {
	const movingDivStyle = {
		animationName: 'movingDiv',
		animationDuration: `${duration}ms`,
		animationFillMode: 'both',
		animationTimingFunction: 'cubic-bezier(0, 0, 0.4, 1)',
		animationDelay: `${delay}ms`,
	}

	return (
		<div style={movingDivStyle} className={classVar} id={idVar}>
			{children}
		</div>
	)
}
