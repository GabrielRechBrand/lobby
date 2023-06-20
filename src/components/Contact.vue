<template>
    <div class="home">
        <div class="text-center" v-if="!success">
            <h1>Interested?</h1>
            <p class="lead">
                <span>{{ typedText }}</span>
            </p>
            <form class="d-flex justify-content-center" @submit.prevent="sendMail">
                <input required type="email" v-model="email" class="input-group" name="email" style="width: 300px" />
                <input type="hidden" name="_subject" value="New email submission" />
                <button type="submit" class="btn btn-outline-primary" style="margin-left: 10px">Submit</button>
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
            welcomeMessage: "Enter your email in the field below so we can notify you when the application becomes available.",
            typedText: '',
            currentIndex: 0,
            typingSpeed: 50, // Adjust the typing speed (in milliseconds) here
            timerId: null,
        };
    },

    mounted() {
        this.startTypingAnimation();
    },

    methods: {
        startTypingAnimation() {
            this.timerId = setInterval(() => {
                if (this.currentIndex === this.welcomeMessage.length) {
                    clearInterval(this.timerId);
                    return;
                }
                this.typedText += this.welcomeMessage.charAt(this.currentIndex);
                this.currentIndex++;
            }, this.typingSpeed);
        },

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

.btn-outline-primary {
    color: #ffffff; /* Set the default text color */
    border-color: rgba(231, 50, 246, 0.91); /* Set the default border color */
    background-color: transparent; /* Set the default background color */
    transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out; /* Add transition for color and background-color */
}

.btn-outline-primary:hover {
    color: #fff; /* Set the text color on hover */
    background-color: rgb(66, 30, 121); /* Set the background color on hover */
}
</style>
