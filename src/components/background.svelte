<script lang="ts">
	import { backgroundColors, TimerState } from "../states";
</script>

<div class="background" style="background-color: {backgroundColors[$TimerState]};"></div>

<style lang="scss">
	.background {
		width: 100vw;
		height: 100vh;
		position: absolute;
		top: 0;
		left: 0;
	}
</style>
