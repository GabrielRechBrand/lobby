<template>
    <div class="home">
        <div class="text-center" v-if="!success">
            <h1>Interested?</h1>
            <p class="lead">Enter your email in the field below so we can notify you when the application becomes available.</p>
            <form class="d-flex justify-content-center" @submit.prevent="sendMail">
                <input required type="email" v-model="email" class="input-group" />
                <input type="submit" value="Submit" class="btn btn-outline-secondary" />
            </form>
        </div>
        <div class="text-center" v-else>
            <h1>Thank you! 💘</h1>
            <p>As soon as the first version of the Lobby is released, we'll give you a heads up.</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: "",
            success: false,
        };
    },

    methods: {
        sendMail() {
            if (this.email) {
                this.success = true;
            }
        },
    },
};
</script>

<style scoped>
.home {
    padding: 4rem;
}
</style>
