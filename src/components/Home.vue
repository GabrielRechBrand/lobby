<template>
    <div class="home">
        <div class="text-center">
            <h1>Welcome to the Lobby!</h1>
            <p class="lead">
                <span ref="typedTextSpan">{{ typedText }}</span>
            </p>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Home',
    data() {
        return {
            welcomeMessage: "Schedule and organize your gaming sessions with ease.",
            typedText: '',
            currentIndex: 0,
            typingSpeed: 50,
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
    },
};
</script>

<style scoped>
@keyframes typingAnimation {
    from {
        width: 0;
    }
    to {
        width: 100%;
    }
}
</style>
