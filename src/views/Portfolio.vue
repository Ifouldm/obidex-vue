<template>
    <div class="toolbar">
        <button @click="sort('title')">
            Sort by Title
            <span v-if="order.field === 'title' && order.direc === 'desc'">
                &darr;
            </span>
            <span v-if="order.field === 'title' && order.direc === 'asc'">
                &uarr;
            </span>
        </button>
        <button @click="sort('date')">
            Sort by Date
            <span v-if="order.field === 'date' && order.direc === 'desc'">
                &darr;
            </span>
            <span v-if="order.field === 'date' && order.direc === 'asc'">
                &uarr;
            </span>
        </button>
        <select v-model="filterSelection" @change="() => filter('tech')">
            <option value="" disabled selected>Select a Technology</option>
            <option v-for="techItem in tech" :key="techItem">
                {{ techItem }}
            </option>
        </select>
        <label for="showNew">Filter by New</label>
        <input
            type="checkbox"
            v-model="showNew"
            id="showNew"
            @change="() => filter('new')"
        />
    </div>
    <div class="grid">
        <transition-group name="cards" appear mode="out-in">
            <portfolio-card
                v-for="portfolio in portfolios"
                :key="portfolio.title"
                :portfolio="portfolio"
            />
        </transition-group>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { Portfolio, techList } from '../types';
import axios from 'axios';
import PortfolioCard from '@/components/PortfolioCard.vue';

export default defineComponent({
    components: { PortfolioCard },
    setup() {
        let allPortfolios = [] as Array<Portfolio>;

        const portfolios = ref([] as Array<Portfolio>);

        const order = ref({ field: '', direc: '' });

        const tech = ref([...techList.keys()]);

        const filterSelection = ref('');

        const showNew = ref(false);

        const fetchPortfolio = async function () {
            try {
                allPortfolios = await (
                    await axios.get('/api/portfolio')
                ).data._embedded.portfolio;
                portfolios.value = [...allPortfolios];
            } catch (err) {
                console.log('ERROR', err);
            }
        };

        const sort = function (field: string) {
            if (field === 'title') {
                portfolios.value.sort((a, b) => a.title.localeCompare(b.title));
                if (order.value.direc === 'desc') portfolios.value.reverse();
                order.value.field = 'title';
                order.value.direc =
                    order.value.direc === 'desc' ? 'asc' : 'desc';
            } else if (field === 'date') {
                portfolios.value.sort(
                    (a, b) =>
                        new Date(a.dateCreated).valueOf() -
                        new Date(b.dateCreated).valueOf()
                );
                if (order.value.direc === 'desc') portfolios.value.reverse();
                order.value.field = 'date';
                order.value.direc =
                    order.value.direc === 'desc' ? 'asc' : 'desc';
            }
        };

        const filter = function (filt: string) {
            if (filt === 'new') {
                portfolios.value = allPortfolios.filter(
                    (port) => port.new === showNew.value
                );
            } else if (filt === 'tech') {
                portfolios.value = allPortfolios.filter((port) =>
                    port.tech.includes(filterSelection.value)
                );
            }
        };

        onMounted(fetchPortfolio);

        return {
            portfolios,
            sort,
            filter,
            order,
            tech,
            filterSelection,
            showNew,
        };
    },
});
</script>

<style scoped lang="scss">
.grid {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
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
</style>
