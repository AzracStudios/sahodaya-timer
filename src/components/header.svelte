<script>
	import { TimerState } from "../states";

</script>

<div class="header header--{$TimerState}">
    
    <div class="header__competition">
        <div class="header__text header__text--small">45th Coimbatore Sahodaya Complex</div>
        <div class="header__text">Inter School Story Telling For Girls</div>
    </div>

    <div class="header__school">
        <img src="/school_logo.png" alt="header-logo" class="header__logo">
        <div class="header__text">Chinmaya Vidyalaya CBSE</div>
    </div>
</div>

<style lang="scss">
    .header__logo {
        width: 2.5rem;
    }

    .header__text {
        font-size: 1.3rem;
    }

    .header__text--small {
        font-size: 1rem;
        text-align: center;
    }

    .header {
        position: fixed;
        top: 0;
        margin-block: 2rem;
    }

    .header__school {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .header {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .header--1, .header--2 {
        .header__logo {
            filter: invert(1);
        }

        .header__text {
            color: white;
        }
    }
</style>