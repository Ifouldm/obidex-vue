<template>
    <div class="card">
        <div class="title">{{ portfolio.title }}</div>
        <div class="img">
            <img class="img" :src="imgSrc(portfolio.images[0])" alt="" />
        </div>
        <div class="description">{{ portfolio.description }}</div>
        <div class="tech">
            <ul>
                <li v-for="tech in portfolio.tech" :key="tech">
                    <a :href="technology(tech).site">
                        {{ technology(tech).name }}
                    </a>
                </li>
            </ul>
        </div>
        <div class="links">
            <a v-if="portfolio.productLink" :href="portfolio.productLink">
                Link to {{ portfolio.title }}
            </a>
            <a v-if="portfolio.githubLink" :href="portfolio.githubLink">
                Github Link
            </a>
        </div>
        <div class="date">Date created:{{ portfolio.dateCreated }}</div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Portfolio, techList } from '../types';

export default defineComponent({
    props: {
        portfolio: {
            required: true,
            type: Object as PropType<Portfolio>,
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
    .links {
        display: flex;
        justify-content: space-evenly;
    }
    .date {
        text-align: right;
    }
}
</style>
