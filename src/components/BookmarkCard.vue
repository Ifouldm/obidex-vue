<template>
    <div class="card">
        <div class="title">{{ bookmark.name }}</div>
        <div class="img">
            <a :href="bookmark.url">
                <img
                    class="img"
                    :src="imgSrc(bookmark.image)"
                    alt="Bookmark Image"
                />
            </a>
        </div>
        <div class="description" v-if="bookmark.description">
            {{ bookmark.description }}
        </div>
        <div class="link">
            <a :href="bookmark.url"> Link to {{ bookmark.name }} </a>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Bookmark, techList } from '../types';

export default defineComponent({
    props: {
        bookmark: {
            required: true,
            type: Object as PropType<Bookmark>,
        },
    },
    setup() {
        const imgBucket = process.env.VUE_APP_IMG_BUCKET;

        const technology = function (tech: string) {
            return techList.get(tech);
        };

        const imgSrc = function (filename: string) {
            return imgBucket + filename;
        };

        return { imgSrc, technology };
    },
});
</script>

<style lang="scss" scoped>
.card {
    padding: 1rem;
    margin: 1rem;
    border: 2px solid black;
    border-radius: 1rem;
    .img {
        width: 200px;
        height: 200px;
    }
    .link {
        display: flex;
        justify-content: space-evenly;
    }
}
</style>
