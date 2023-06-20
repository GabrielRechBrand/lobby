<template>
    <div class="game-list">
        <h2>Popular Video Games</h2>
        <div id="game-carousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div v-for="(game, index) in games" :key="game.id" :class="['carousel-item', { 'active': index === 0 }]">
                    <div class="game-card">
                        <img :src="game.background_image" :alt="game.name" class="game-image" />
                        <div class="game-details">
                            <h3>{{ game.name }}</h3>
                            <p class="game-description">{{ game.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#game-carousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#game-carousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        <div v-if="loading" class="loading-indicator">Loading...</div>
        <div v-if="error" class="error-message">{{ error }}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            games: [],
            loading: false,
            error: null
        };
    },
    mounted() {
        this.fetchGames();
    },
    methods: {
        fetchGames() {
            this.loading = true;
            fetch('https://api.rawg.io/api/games?key=d7afbf3d6e994c7691e2728c10ec1c9f')
                .then(response => response.json())
                .then(data => {
                    this.games = data.results;
                    this.loading = false;
                })
                .catch(error => {
                    this.error = 'Error fetching games. Please try again later.';
                    this.loading = false;
                    console.error(error);
                });
        }
    }
};
</script>

<style scoped>
.game-list {
    padding: 1rem;
}

.carousel {
    margin: 0 auto;
    max-width: 300px;
    max-height: 300px;
}

.carousel-item {
    text-align: center;
}

.game-card {
    border: 1px solid #ccc;
    border-radius: 8px;
    overflow: hidden;
    transition: box-shadow 0.3s ease-in-out;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.game-card:hover {
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}

.game-image {
    width: 300px;
    height: 300px;
    object-fit: cover;
}

.game-details {
    padding: 1rem;
}

h2 {
    margin-bottom: 1rem;
}

.game-description {
    line-height: 1.2;
}

.loading-indicator {
    margin-top: 1rem;
}

.error-message {
    margin-top: 1rem;
    color: red;
}
</style>