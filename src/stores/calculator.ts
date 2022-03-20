import { defineStore } from 'pinia';
import alertify from 'alertifyjs';

export const useCalculator = defineStore('useCalculator', {
    state: () => ({
        ans: 0 as number,
        num: 0 as number,
        operator: '' as string,
    }),
    actions: {
        calculate() {            
            if(this.operator === 'add') {
                this.ans = this.num + this.ans;
            }
            else if(this.operator === 'subtract') {
                this.ans = this.ans - this.num;
            }
            else if(this.operator === 'multiply') {
                this.ans = this.ans * this.num;
            }
            else if(this.operator === 'divide') {
                this.ans = parseFloat((this.ans / this.num).toFixed(3));
            }
            this.num = 0;
            this.operator = '';
        },
        addToNumber(number: number | string) {
            if(this.ans.toString().length > 15) {
                alertify.error('You reached maximum length', 2);
                return;
            }
            if(this.operator !== '') {
                this.num = parseInt(((this.num || '').toString() + number).toString());
            } else {
                this.ans = parseInt(((this.ans || '').toString() + number).toString());
            }
        },
    },
    persist: false,
});