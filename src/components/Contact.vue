<template>
    <div class="home">
        <div class="text-center" v-if="!success">
            <h1>Interested?</h1>
            <p class="lead">Enter your email in the field below so we can notify you when the application becomes available.</p>
            <form class="d-flex justify-content-center" @submit.prevent="sendMail">
                <input required type="email" v-model="email" class="input-group" name="email">
                <input type="hidden" name="_subject" value="New email submission">
                <button type="submit" class="btn btn-outline-secondary">Submit</button>
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
            email: '',
            success: false,
        };
    },

    methods: {
        sendMail() {
            if (this.email) {
                const form = document.createElement('form');
                form.action = 'https://formspree.io/f/xnqyeovp';
                form.method = 'POST';
                form.innerHTML = `
          <input type="email" name="email" value="${this.email}">
          <textarea name="message" style="display: none;">You are on the list to be notified when the Lobby game party scheduling app is released.</textarea>
        `;
                document.body.appendChild(form);
                form.submit();
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
