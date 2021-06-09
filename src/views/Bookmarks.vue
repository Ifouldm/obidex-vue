<template>
    <div class="toolbar">
        <button @click="sort('name')">
            Sort by Title
            <span v-if="order.field === 'name' && order.direc === 'desc'">
                &darr;
            </span>
            <span v-if="order.field === 'name' && order.direc === 'asc'">
                &uarr;
            </span>
        </button>
    </div>
    <div class="grid">
        <transition-group name="cards" appear mode="out-in">
            <bookmark-card
                v-for="bookmark in bookmarks"
                :key="bookmark.name"
                :bookmark="bookmark"
            />
        </transition-group>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { Bookmark } from '../types';
import axios from 'axios';
import BookmarkCard from '@/components/BookmarkCard.vue';

export default defineComponent({
    components: { BookmarkCard },
    setup() {
        let allBookmarks = [] as Array<Bookmark>;

        const bookmarks = ref([] as Array<Bookmark>);

        const order = ref({ field: '', direc: '' as 'asc' | 'desc' | '' });

        const filterSelection = ref('');

        const fetchPortfolio = async function () {
            try {
                allBookmarks = await (
                    await axios.get('/api/bookmarks')
                ).data._embedded.bookmarks;

                bookmarks.value = [...allBookmarks];
            } catch (err) {
                console.log('ERROR', err);
            }
        };

        const sort = function (field: string) {
            if (field === 'name') {
                bookmarks.value.sort((a, b) => a.name.localeCompare(b.name));
                if (order.value.direc === 'desc') bookmarks.value.reverse();
                order.value.field = 'name';
                order.value.direc =
                    order.value.direc === 'desc' ? 'asc' : 'desc';
            }
        };

        const filter = function (filt: string) {
            console.log(filt);
        };

        onMounted(fetchPortfolio);

        return {
            bookmarks,
            sort,
            filter,
            order,
            filterSelection,
        };
    },
});
</script>

<style scoped lang="scss">
.grid {
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
}

.cards-move {
    transition: all 1s ease;
}

.cards-enter-from {
    transform: scale(0);
}

.cards-leave-to {
    transform: translateX(100%);
    opacity: 0;
}

.cards-enter-active,
.cards-leave-active {
    transition: all 1s ease;
}

.cards-leave-active {
    position: absolute;
}

@media (min-width: 768px) and (max-width: 1200px) {
    .grid {
        grid-template-columns: 1fr 1fr;
    }
}

@media (min-width: 1200px) {
    .grid {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
}
</style>
