import { defineStore } from 'pinia';

export const useCalculator = defineStore('useCalculator', {
    state: () => ({
        ans: 0 as number,
    }),
    actions: {
        calculate() {
            this.ans = 10;
        },  
        clear() {
            this.ans = 0;
        },
        add(num: number) {
            this.ans += num;
        },
        sub(num: number) {
            this.ans -= num;
        },
        mul(num: number) {
            this.ans *= num;
        },
        div(num: number) {
            this.ans /= num;
        },    
    },
    persist: false,
});