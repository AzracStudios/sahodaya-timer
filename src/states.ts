import { writable, type Writable } from "svelte/store";

export enum State {
    normal,
    grace,
    disqualified
}

export const SecondsPassed: Writable<number> = writable<number>(0);
export const MinutesPassed: Writable<number> = writable<number>(0);
export const TimerInterval: Writable<number|null> = writable<number|null>(null);
export const TimerStarted: Writable<boolean> = writable<boolean>(false);
export const TimerState: Writable<State> = writable<State>(State.normal);

export const backgroundColors: string[] = ["#F9F5EC", "#466D1D", "#B90E0A"];