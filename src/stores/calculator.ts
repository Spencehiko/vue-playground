import { defineStore } from 'pinia';
import alertify from 'alertifyjs';

export const useCalculator = defineStore('useCalculator', {
    state: () => ({
        ans: 0 as number,
    }),
    actions: {
        calculate() {
            console.log('calculate???');
        },
        addToNumber(number: number | string) {
            if(this.ans.toString().length > 15) {
                alertify.error('You reached maximum length', 2);
                return;
            }
            console.log(number);
            this.ans = parseInt(((this.ans || '').toString() + number).toString());
        },
    },
    persist: false,
});