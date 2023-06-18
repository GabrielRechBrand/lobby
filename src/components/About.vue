<template>
    <div class="home">
        <div class="text-center">
            <h1>Features</h1>
        </div>
        <div class="features-list">
            <div v-for="(feature, index) in features" :key="index" class="feature-item">
                <input type="checkbox" :id="'feature-' + index" :checked="isSelected(index)" disabled />
                <label :for="'feature-' + index" :class="{ 'shake': isSelected(index) }">{{ feature }}</label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            features: ['⌚ Game scheduling', '🫂 Team creation', '🔉 Voice chats', '📹 Channel livestreams', '🕺🏽 Ricky Martin'],
            selectedFeatures: [],
        };
    },

    mounted() {
        this.selectFeaturesOneByOne();
        this.unmarkRickyMartin();
    },

    methods: {
        selectFeaturesOneByOne() {
            this.features.slice(0, -1).forEach((_, index) => {
                setTimeout(() => {
                    this.selectedFeatures.push(index);
                }, (index + 1) * 500);
            });
        },

        unmarkRickyMartin() {
            setTimeout(() => {
                const rickyMartinIndex = this.features.length - 1;
                this.selectedFeatures = this.selectedFeatures.filter((index) => index !== rickyMartinIndex);
            }, this.features.length * 500 + 1000);
        },

        isSelected(index) {
            return this.selectedFeatures.includes(index);
        },
    },
};
</script>

<style scoped>
.home {
    padding: 4rem;
}

.features-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, auto);
    gap: 0.5rem;
}

.feature-item {
    display: flex;
    align-items: center;
}

.feature-item input[type="checkbox"] {
    margin-right: 0.5rem;
}

.shake {
    animation: shake 2s;
}

@keyframes shake {
    0% {
        transform: translateX(0);
    }
    10% {
        transform: translateX(-5px);
    }
    20% {
        transform: translateX(5px);
    }
    30% {
        transform: translateX(-5px);
    }
    40% {
        transform: translateX(5px);
    }
    50% {
        transform: translateX(-5px);
    }
    60% {
        transform: translateX(5px);
    }
    70% {
        transform: translateX(-5px);
    }
    80% {
        transform: translateX(5px);
    }
    90% {
        transform: translateX(-5px);
    }
    100% {
        transform: translateX(0);
    }
}
</style>
