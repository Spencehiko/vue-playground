import { defineStore } from 'pinia';

interface ShoppingItem {
    id: number;
    title: string;
    count: number;
}

export const useShopping = defineStore('useShopping', {
    state: () => ({
        items: [] as ShoppingItem[],
    }),
    actions: {
        addItem(title: string) {
            this.items.push({
                id: this.items.length,
                title,
                count: 1,
            });
        },
        removeItem(id: number) {
            this.items = this.items.filter((item: ShoppingItem) => item.id !== id);
        },
        clearItems() {
            this.items = [];
        },
        incrementItem(id: number) {
            const item = this.items.find((item: ShoppingItem) => item.id === id);
            if (item) {
                item.count++;
            }
        },
        decrementItem(id: number) {
            const item = this.items.find((item: ShoppingItem) => item.id === id);
            if (item) {
                if(item.count === 1) {
                    this.removeItem(id);
                } else {
                    item.count--;
                }
            }
        },
    },
    getters: {
        allItems(): ShoppingItem[] {
            return this.items;
        },
    },
    persist: true,
});