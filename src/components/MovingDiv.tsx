export default function MovingDiv({
	duration,
	delay,
	children,
}: { duration: number; delay: number; children: React.ReactNode }) {
	const movingDivStyle = {
		animationName: 'heroMovingDiv',
		animationDuration: `${duration}ms`,
		animationFillMode: 'both',
		animationTimingFunction: 'cubic-bezier(0, 0, 0.4, 1)',
		animationDelay: `${delay}ms`,
	}

	return <div style={movingDivStyle}>{children}</div>
}
