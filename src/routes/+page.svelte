<script>
	import Background from '../components/background.svelte';
	import Control from '../components/control.svelte';
	import Display from '../components/display.svelte';
	import Header from '../components/header.svelte';
	import { TimerState } from '../states';
</script>

<Background />

<div class="wrapper">
	<Header />

	<Display />

	<Control />
</div>

<div class="credits credits--{$TimerState}">Made with ❤️ by Adarsh Ravikumar</div>

<style lang="scss">
	.wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100svh;

		position: relative;
		z-index: 5;
	}

	.credits {
		position: fixed;
		bottom: 1rem;
		right: 1rem;
		font-size: 0.8rem;
	}

    .credits--1, .credits--2 {
        color: white;
    }
</style>
