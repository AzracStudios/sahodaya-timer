<script lang="ts">
	import { MinutesPassed, SecondsPassed, TimerStarted, TimerInterval, State, TimerState } from '../states';

	function resetTimer() {
		$TimerStarted = false;
		$SecondsPassed = 0;
		$MinutesPassed = 0;
		clearInterval($TimerInterval!);
        $TimerInterval = null;

        $TimerState = State.normal;
	}

	function toggleTimer() {
		$TimerStarted = !$TimerStarted;
	}

	function stepTimer() {
		$SecondsPassed++;

		if ($SecondsPassed === 60) {
			$SecondsPassed = 0;
			$MinutesPassed++;
		}


        if ($MinutesPassed === 2 && $SecondsPassed > 30) {
            $TimerState = State.grace;
        }

        if ($MinutesPassed === 3) {
            $TimerState = State.disqualified;
        }
	}

	TimerStarted.subscribe((started: boolean): void => {
		if (!started) {
			clearInterval($TimerInterval!);
			$TimerInterval = null;
			return;
		}

		if ($TimerInterval === null) $TimerInterval = setInterval(stepTimer, 1000);
	});

</script>

<div class="ctrl ctrl--{$TimerState}">
    <button class="ctrlbtn ctrlbtn__pause_play" on:click={toggleTimer}>
        {#if $TimerStarted}
            <img src="/pause.png" alt="pause" class="ctrlbtn__img"/>
            <span class="ctrlbtn__text">Pause</span>
        {:else}
            <img src="/play.png" alt="play" class="ctrlbtn__img"/>
            <span class="ctrlbtn__text">Start</span>
        {/if}
    </button>
    
    <button class="ctrlbtn ctrlbtn__reset" on:click={resetTimer}>
        <img src="/reset.png" alt="reset" class="ctrlbtn__img"/>
        <span class="ctrlbtn__text">Reset</span>
    </button>
</div>


<style lang="scss">
    .ctrl {
        display: flex;
        gap: 2rem;
    }
    
    .ctrl--1, .ctrl--2 {
        .ctrlbtn__text {
            color: white;
        }
        
        .ctrlbtn {
            outline: 1px solid white;
            
            .ctrlbtn__img {
                filter: invert(1);
            }
        }
    }
    
    .ctrlbtn {
        background: transparent;
        display: flex;
        gap: 1rem;
        align-items: center;
        
        border: none;
        outline: 1px solid black;
        border-radius: 0.5rem;
        

        padding: 1rem 2rem;

        .ctrlbtn__img {
            width: 1.5rem;
        }

        .ctrlbtn__text {
            font-size: 1rem;
        }
    }
</style>