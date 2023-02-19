/* Little helper functions to comply with A11y requirement to provide either a keyUp, 
keyDown or keyPress (deprecated) with every onClick event */
export function wrapKeyUp(handler: () => void) {
	return (event: KeyboardEvent) => {
		if (event.key === 'enter') {
			handler();
		}
	};
}
