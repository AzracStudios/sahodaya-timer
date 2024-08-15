<script lang="ts">
	import { MinutesPassed, SecondsPassed, TimerState } from '../states';

	function formatDigits(digits: number): string {
		if (digits.toString().length === 1) {
			return `0${digits}`;
		}

		return `${digits}`;
	}
</script>

<div class="display display--{$TimerState}">
	<p class="display__text display__text--minutes">{formatDigits($MinutesPassed)}</p>
	<p class="display__text display__text--col">:</p>
	<p class="display__text display__text--seconds">{formatDigits($SecondsPassed)}</p>
</div>

<style lang="scss">
	.display {
		display: flex;
		gap: 1rem;
		margin-block: 5rem;

		.display__text {
			font-size: 5rem;
		}
	}

	.display--1,
	.display--2 {
		.display__text {
			color: white;
		}
	}
</style>
