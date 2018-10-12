import throttle from './throttle'

let listenAction
let supportCSSStricky

const getBindingConfig = binding => {
	const params = binding.value || {}
	let stickyTop = params.stickyTop || 0
	let zIndex = params.zIndex || 1000
	let disabled = params.disabled

	return {stickyTop, zIndex, disabled}
}
const getInitialiConfig = el => {
	return {zIndex: el.style.zIndex}
}
const unwatch = () => {
	window.removeEventListener('scroll', listenAction)
}
const watch = () => {
	window.addEventListener('scroll', listenAction)
}