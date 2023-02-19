<script context="module" lang="ts">
	export interface TypeWriterController {
		start: () => void;
		stop: () => void;
	}
</script>

<script lang="ts">
	export let text: string;

	/* typing speed in words per minute */
	export const wpm = 120;

	export const controller: TypeWriterController = {
		start() {
			clearBuffer();
			/* calculate the intervall to wait between key strokes */
			typer = setInterval(doType, 1000 / (wpm > 0 ? wpm : 120));
		},
		stop() {
			stopTyping();
			clearBuffer();
		}
	};

	let currentBuffer = '';
	let idx = 0;
	let typer: ReturnType<typeof setInterval>;

	function doType() {
		if (idx < text.length) {
			currentBuffer += text[idx];
			idx += 1;
		} else {
			stopTyping();
		}
	}

	function stopTyping() {
		clearInterval(typer);
		idx = 0;
	}

	function clearBuffer() {
		currentBuffer = '';
	}
</script>

<span>{currentBuffer}</span>
