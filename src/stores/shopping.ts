import { defineStore } from 'pinia';
import alertify from 'alertifyjs';
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
            if (title.trim() === '') {
                alertify.error('Title cannot be empty!', 2);
                return;
            }
            this.items.push({
                id: this.items.length,
                title,
                count: 1,
            });
            alertify.success("Item added", 2);
        },
        removeItem(id: number) {
            alertify.confirm("Confirm", "Are you sure to delete this item?", () => {
                this.items = this.items.filter((item: ShoppingItem) => item.id !== id);
                alertify.success("Item removed", 2);
            }, () => { }).set('movable', false);
        },
        clearItems() {
            alertify.confirm("Confirm", "Are you sure to delete ALL items?", () => {
                this.items = [];
                alertify.success("Items cleared", 2);
            }, () => { }).set('movable', false);
        },
        incrementItem(id: number) {
            const item = this.items.find((item: ShoppingItem) => item.id === id);
            if (item) {
                if(item.count === 20) {
                    alertify.error('You cannot have more than 20 items!', 2);
                    return;
                }
                item.count++;
                alertify.success("Item count incremented", 2);
            }
        },
        decrementItem(id: number) {
            const item = this.items.find((item: ShoppingItem) => item.id === id);
            if (item) {
                if (item.count === 1) {
                    this.removeItem(id);
                } else {
                    item.count--;
                    alertify.success("Item count decremented", 2);
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