import { defineStore } from 'pinia';
import alertify from 'alertifyjs';

interface NewsItem {
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export const useNews = defineStore('useNews', {
    state: () => ({
        news: [] as NewsItem[],
    }),
    actions: {
        async getNews(query: string) {
            const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=ac25143eb6bb4e1395dcd7434fa0f40a&language=en&pageSize=18`);
            const data = await response.json();
            this.news = data.articles;
        },      
    },
    getters: {
        allNews(): NewsItem[] {
            return this.news.sort((a: NewsItem, b: NewsItem) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
        },
    },
    persist: false,
});