<template>
    <div>
        <header class="header d-flex d-inline-block">
            <h1 class="header-title">Lobby</h1>
            <router-link to="/"><i class="header-shortcut i-gamepad" /></router-link>
            <router-link to="/about"><i class="header-shortcut i-gamepad" /></router-link>
            <router-link to="/contact"><i class="header-shortcut i-gamepad" /></router-link>
        </header>

        <div class="router-view">
            <router-view></router-view>
        </div>

        <div class="gamepad-background"></div>
        <div class="dark-mode-toggle" @click="toggleDarkMode">
            <svg class="theme-icon" xmlns="http://www.w3.org/2000/svg" v-if="isDarkMode"  viewBox="0 0 64 64" width="64px" height="64px"><linearGradient id="Z~5Q0ntAWmFNgqTFWGgXNa" x1="42" x2="42" y1="39.5" y2="46.54" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"/><stop offset="1" stop-color="#e6abff"/></linearGradient><path fill="url(#Z~5Q0ntAWmFNgqTFWGgXNa)" d="M42 40A3 3 0 1 0 42 46A3 3 0 1 0 42 40Z"/><linearGradient id="Z~5Q0ntAWmFNgqTFWGgXNb" x1="11.5" x2="11.5" y1="32" y2="45.072" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"/><stop offset="1" stop-color="#e6abff"/></linearGradient><path fill="url(#Z~5Q0ntAWmFNgqTFWGgXNb)" d="M7,32.803C7.882,32.292,8.907,32,10,32c3.314,0,6,2.686,6,6s-2.686,6-6,6"/><linearGradient id="Z~5Q0ntAWmFNgqTFWGgXNc" x1="32" x2="32" y1="4.75" y2="59.778" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"/><stop offset="1" stop-color="#c822ff"/></linearGradient><path fill="url(#Z~5Q0ntAWmFNgqTFWGgXNc)" d="M32,6C17.664,6,6,17.663,6,32s11.664,26,26,26s26-11.663,26-26S46.336,6,32,6z M53.718,21.8 C52.939,24.276,50.605,26,48,26c-3.309,0-6-2.691-6-6c0-3.26,2.615-5.916,5.857-5.993C50.305,16.167,52.311,18.815,53.718,21.8z M24.702,9.138C24.897,9.735,25,10.358,25,11c0,3.309-2.691,6-6,6c-1.582,0-3.079-0.634-4.192-1.722 C17.523,12.487,20.907,10.353,24.702,9.138z M8.072,30.237C8.699,30.082,9.345,30,10,30c4.411,0,8,3.589,8,8 c0,3.584-2.326,6.662-5.714,7.664C9.587,41.783,8,37.074,8,32C8,31.406,8.029,30.82,8.072,30.237z M32,56 c-7.404,0-14.034-3.372-18.44-8.658C17.41,45.888,20,42.228,20,38c0-5.514-4.486-10-10-10c-0.569,0-1.132,0.048-1.686,0.142 c0.694-4.274,2.517-8.174,5.157-11.379C14.948,18.177,16.919,19,19,19c4.411,0,8-3.589,8-8c0-0.822-0.131-1.619-0.371-2.387 C28.357,8.217,30.153,8,32,8c5.104,0,9.836,1.606,13.73,4.333C42.422,13.314,40,16.378,40,20c0,4.411,3.589,8,8,8 c2.757,0,5.275-1.458,6.723-3.707C55.547,26.714,56,29.304,56,32C56,45.233,45.233,56,32,56z"/><linearGradient id="Z~5Q0ntAWmFNgqTFWGgXNd" x1="42" x2="42" y1="4.75" y2="59.778" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"/><stop offset="1" stop-color="#c822ff"/></linearGradient><path fill="url(#Z~5Q0ntAWmFNgqTFWGgXNd)" d="M42,36c-3.86,0-7,3.141-7,7s3.14,7,7,7s7-3.141,7-7S45.86,36,42,36z M42,48 c-2.757,0-5-2.243-5-5s2.243-5,5-5s5,2.243,5,5S44.757,48,42,48z"/><linearGradient id="Z~5Q0ntAWmFNgqTFWGgXNe" x1="31" x2="31" y1="4.75" y2="59.778" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"/><stop offset="1" stop-color="#c822ff"/></linearGradient><path fill="url(#Z~5Q0ntAWmFNgqTFWGgXNe)" d="M31,26c-2.206,0-4,1.794-4,4s1.794,4,4,4s4-1.794,4-4S33.206,26,31,26z M31,32 c-1.103,0-2-0.897-2-2s0.897-2,2-2s2,0.897,2,2S32.103,32,31,32z"/><linearGradient id="Z~5Q0ntAWmFNgqTFWGgXNf" x1="27" x2="27" y1="4.75" y2="59.778" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"/><stop offset="1" stop-color="#c822ff"/></linearGradient><path fill="url(#Z~5Q0ntAWmFNgqTFWGgXNf)" d="M27,44c-2.206,0-4,1.794-4,4s1.794,4,4,4s4-1.794,4-4S29.206,44,27,44z M27,50 c-1.103,0-2-0.897-2-2s0.897-2,2-2s2,0.897,2,2S28.103,50,27,50z"/><linearGradient id="Z~5Q0ntAWmFNgqTFWGgXNg" x1="48" x2="48" y1="15.375" y2="24.876" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"/><stop offset="1" stop-color="#e6abff"/></linearGradient><path fill="url(#Z~5Q0ntAWmFNgqTFWGgXNg)" d="M48 16A4 4 0 1 0 48 24A4 4 0 1 0 48 16Z"/></svg>
            <svg class="theme-icon" xmlns="http://www.w3.org/2000/svg" v-else  viewBox="0 0 64 64" width="64px" height="64px"><linearGradient id="IO~7w88ty95zJDwXRe8LIa" x1="32" x2="32" y1="36.5" y2="43.502" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"/><stop offset="1" stop-color="#e6abff"/></linearGradient><path fill="url(#IO~7w88ty95zJDwXRe8LIa)" d="M27.068,37c-0.62,0-1.123,0.553-1.004,1.157C26.608,40.917,29.059,43,32,43	c2.941,0,5.392-2.083,5.935-4.843C38.054,37.553,37.552,37,36.932,37H27.068z"/><linearGradient id="IO~7w88ty95zJDwXRe8LIb" x1="32" x2="32" y1="6.617" y2="57.937" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"/><stop offset="1" stop-color="#c822ff"/></linearGradient><path fill="url(#IO~7w88ty95zJDwXRe8LIb)" d="M32,12c-11.028,0-20,8.972-20,20s8.972,20,20,20s20-8.972,20-20S43.028,12,32,12z M32,50 c-9.925,0-18-8.075-18-18s8.075-18,18-18s18,8.075,18,18S41.925,50,32,50z"/><linearGradient id="IO~7w88ty95zJDwXRe8LIc" x1="32" x2="32" y1="6.617" y2="57.937" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"/><stop offset="1" stop-color="#c822ff"/></linearGradient><path fill="url(#IO~7w88ty95zJDwXRe8LIc)" d="M58,32c0-1.912-1.209-3.766-3.345-5.167c0.229-1.288,0.093-2.596-0.403-3.824 c-0.529-1.312-1.445-2.426-2.618-3.203c0.566-2.548,0.118-4.823-1.249-6.19s-3.641-1.815-6.19-1.249 c-0.777-1.173-1.892-2.089-3.204-2.618c-1.228-0.497-2.534-0.634-3.823-0.403C35.766,7.209,33.912,6,32,6s-3.766,1.209-5.167,3.345 c-1.289-0.23-2.597-0.094-3.824,0.403c-1.31,0.529-2.43,1.446-3.208,2.617c-2.546-0.567-4.82-0.116-6.186,1.25 c-1.367,1.367-1.815,3.643-1.249,6.19c-1.173,0.777-2.089,1.892-2.618,3.204c-0.496,1.228-0.633,2.535-0.403,3.823 C7.209,28.234,6,30.088,6,32s1.209,3.766,3.345,5.167c-0.229,1.288-0.093,2.596,0.403,3.824c0.529,1.312,1.445,2.426,2.618,3.203 c-0.566,2.548-0.118,4.823,1.249,6.19c1.368,1.368,3.647,1.817,6.19,1.248c0.778,1.174,1.893,2.09,3.204,2.619 c1.228,0.497,2.534,0.634,3.823,0.403C28.234,56.791,30.088,58,32,58s3.766-1.209,5.167-3.345c1.289,0.23,2.597,0.094,3.824-0.403 c1.311-0.529,2.425-1.445,3.203-2.619c2.546,0.569,4.823,0.12,6.19-1.248c1.367-1.367,1.815-3.643,1.249-6.19 c1.173-0.777,2.089-1.892,2.618-3.204c0.496-1.228,0.633-2.535,0.403-3.823C56.791,35.766,58,33.912,58,32z M53.024,35.82 c-0.403,0.229-0.597,0.705-0.467,1.15c0.319,1.092,0.264,2.223-0.159,3.271c-0.451,1.116-1.294,2.032-2.374,2.58 c-0.431,0.218-0.644,0.713-0.507,1.176c0.634,2.139,0.429,3.997-0.547,4.974c-0.977,0.977-2.834,1.182-4.974,0.546 c-0.46-0.135-0.958,0.076-1.176,0.507c-0.548,1.08-1.464,1.924-2.579,2.375c-1.049,0.423-2.18,0.479-3.271,0.159 c-0.447-0.133-0.922,0.063-1.15,0.467C34.764,54.888,33.336,56,32,56s-2.764-1.112-3.82-2.976c-0.182-0.319-0.518-0.507-0.87-0.507 c-0.093,0-0.188,0.013-0.28,0.04c-1.093,0.319-2.224,0.264-3.271-0.159c-1.116-0.451-2.032-1.295-2.58-2.375 c-0.219-0.431-0.717-0.641-1.176-0.507c-2.14,0.636-3.997,0.431-4.974-0.546c-0.976-0.977-1.181-2.835-0.547-4.974 c0.137-0.463-0.076-0.958-0.507-1.176c-1.08-0.548-1.923-1.464-2.374-2.579c-0.423-1.049-0.479-2.18-0.159-3.271 c0.13-0.445-0.063-0.921-0.467-1.15C9.112,34.764,8,33.336,8,32s1.112-2.764,2.976-3.82c0.403-0.229,0.597-0.705,0.467-1.15 c-0.319-1.092-0.264-2.223,0.159-3.271c0.451-1.116,1.294-2.032,2.374-2.58c0.431-0.218,0.644-0.713,0.507-1.176 c-0.634-2.139-0.429-3.997,0.547-4.974c0.976-0.976,2.836-1.181,4.974-0.547c0.468,0.136,0.962-0.079,1.179-0.512l0.056-0.119 c0.552-1.017,1.447-1.815,2.521-2.25c1.049-0.423,2.18-0.479,3.271-0.159c0.443,0.131,0.921-0.063,1.15-0.467 C29.236,9.112,30.664,8,32,8s2.764,1.112,3.82,2.976c0.229,0.403,0.704,0.598,1.15,0.467c1.091-0.321,2.223-0.264,3.271,0.159 c1.116,0.451,2.032,1.294,2.58,2.374c0.218,0.43,0.707,0.642,1.176,0.507c2.137-0.633,3.998-0.43,4.974,0.547 s1.181,2.835,0.547,4.974c-0.137,0.463,0.076,0.958,0.507,1.176c1.08,0.548,1.923,1.464,2.374,2.579 c0.423,1.049,0.479,2.18,0.159,3.271c-0.13,0.445,0.063,0.921,0.467,1.15C54.888,29.236,56,30.664,56,32 S54.888,34.764,53.024,35.82z"/><linearGradient id="IO~7w88ty95zJDwXRe8LId" x1="25.826" x2="25.826" y1="6.617" y2="57.937" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"/><stop offset="1" stop-color="#c822ff"/></linearGradient><path fill="url(#IO~7w88ty95zJDwXRe8LId)" d="M19.651,21.826l1.543,1.271C23.866,19.858,27.805,18,32,18v-2 C27.205,16,22.704,18.123,19.651,21.826z"/><g><linearGradient id="IO~7w88ty95zJDwXRe8LIe" x1="24" x2="24" y1="28.064" y2="33.643" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"/><stop offset="1" stop-color="#e6abff"/></linearGradient><circle cx="24" cy="31" r="3" fill="url(#IO~7w88ty95zJDwXRe8LIe)"/><linearGradient id="IO~7w88ty95zJDwXRe8LIf" x1="40" x2="40" y1="28.064" y2="33.643" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"/><stop offset="1" stop-color="#e6abff"/></linearGradient><circle cx="40" cy="31" r="3" fill="url(#IO~7w88ty95zJDwXRe8LIf)"/></g></svg>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isDarkMode: true
        };
    },
    methods: {
        toggleDarkMode() {
            this.isDarkMode = !this.isDarkMode;
            if (document.documentElement.getAttribute('data-bs-theme') === 'dark') {
                document.documentElement.setAttribute('data-bs-theme','light')
            }
            else {
                document.documentElement.setAttribute('data-bs-theme','dark')

            }
        },
    }
}
</script>

<style scoped>
.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 20px;
}

.header-title {
    margin: 0;
}

.gamepad-background {
    position: fixed;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 75%;
    height: 75%;
    z-index: -1;
    background-image: url('./assets/gamepad.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    opacity: 5;
    animation: swing 10s ease-in-out infinite;
    transform-origin: bottom center;
}

@keyframes swing {
    0% {
        transform: rotate(0);
    }
    10% {
        transform: rotate(-10deg);
    }
    20% {
        transform: rotate(10deg);
    }
    30% {
        transform: rotate(-5deg);
    }
    40% {
        transform: rotate(5deg);
    }
    50% {
        transform: rotate(-5deg);
    }
    60% {
        transform: rotate(5deg);
    }
    70% {
        transform: rotate(-5deg);
    }
    80% {
        transform: rotate(5deg);
    }
    90% {
        transform: rotate(-5deg);
    }
    100% {
        transform: rotate(0);
    }
}

.dark-mode-toggle {
    position: fixed;
    width: 64px;
    height: 64px;
    top: 20px;
    right: 20px;
    color: #b5b5b5;
    background-repeat: no-repeat;
    border-radius: 5px;
    cursor: pointer;
}

.router-view {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.theme-icon {
    transition: opacity 0.3s;
}

.dark-mode-toggle {
    cursor: pointer;
}

.dark-mode-toggle:hover .theme-icon {
    opacity: 0.7;
}

.dark-mode-toggle.dark-mode:hover .theme-icon {
    opacity: 1;
}

.dark-mode .theme-icon {
    opacity: 0.7;
}

.dark-mode-toggle svg {
    transition: opacity 0.3s ease-in-out;
}

.dark-mode-toggle svg:not(.active) {
    opacity: 0.5;
}

.header-shortcut {
    display: inline-block;
    width: 50px;
    height: 50px;
    margin-left: 20px;
    border-radius: 50%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    cursor: pointer;
}

@keyframes hoverAnimation {
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
}

.header-shortcut:hover {
    animation: hoverAnimation 1s infinite;
}

.i-gamepad {
    background-image: url('./assets/gamepad.svg');
}
</style>
