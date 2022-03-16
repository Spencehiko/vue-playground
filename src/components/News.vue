<script setup lang='ts'>
import { ref, reactive, computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useNews } from '../stores/news';

const store = useNews();
const { allNews } = storeToRefs(store);
const { getNews } = store;
const query = ref('');

function convertToTime(publishedAt: string) {
    let date: any = new Date(publishedAt);
    date =
        ("0" + date.getDate()).slice(-2) +
        "/" +
        ("0" + (date.getMonth() + 1)).slice(-2) +
        "/" +
        date.getFullYear() +
        " " +
        ("0" + date.getHours()).slice(-2) +
        ":" +
        ("0" + date.getMinutes()).slice(-2);
    return date;
}
</script>

<template>
    <div id="news" class="bg-blue-200 py-10 overflow-auto max-h-100-30px">
        <h3 class="mt-5 text-center">NEWS</h3>
        <input
            v-model="query"
            @keyup.enter="getNews(query)"
            placeholder="Are you looking for news? Write and press enter"
            type="text"
            maxlength="50"
            class="
                form-control
                block
                w-3/4
                px-3
                py-1.5
                text-center
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                mx-auto
                mt-5
                focus:text-gray-700
                focus:bg-white
                focus:border-green-600
                focus:outline-none
            "
        />
        <div class="flex justify-center">
            <div
                class="
                    mt-10
                    bg-white
                    rounded-lg
                    border border-gray-300
                    w-3/4
                    text-gray-900
                    grid grid-cols-3
                    gap-4
                    p-2
                "
                v-if="allNews.length > 0"
            >
                <a
                    v-for="(item, index) in allNews"
                    :key="index"
                    class="
                        border border-gray-300
                        w-full
                        cursor-pointer
                        rounded-md
                    "
                    :href="item.url"
                    target="_blank"
                >
                    <img
                        v-if="item.urlToImage"
                        class="w-full h-60"
                        :src="item.urlToImage"
                    />
                    <div class="content px-1 py-2 flex flex-col">
                        <span class="my-auto text-left text-sm" v-text="convertToTime(item.publishedAt)"></span>
                        <span
                            v-text="item.title"
                            class="my-auto text-left font-semibold"
                        ></span>
                    </div>
                </a>
            </div>
            <p v-if="allNews.length === 0" class="mt-10 italic">
                ~ There are no news with that query ~
            </p>
        </div>
    </div>
</template>