<template>
    <div id="skillTag" :style="getColor()" :class="{ 'skillTag-visible': visible }">
        {{skill}}
    </div>
</template>

<script>
    export default {
        name: 'skillTag',
        data() {
            return {
                visible: false
            };
        },
        methods: {
            getColor() {
                let text = 'white';
                if (this.color === "White" || this.color === "Yellow") {
                    text = 'rgb(130,130,130)';
                }

                return {
                    color: text,
                    background: this.color,
                    boxShadow: `0px 0px .75rem .125rem ${this.color}`
                };
            }
        },
        props: {
            skill: String,
            color: String
        },
        mounted() {
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.visible = true;
                        observer.disconnect();
                    }
                });
            }, {
            });
            observer.observe(this.$el);
        }
    }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Iceland');
@import url('https://fonts.googleapis.com/css2?family=Michroma');

@media (max-width: 1000px) {
    #skillTag {
        font-size: .8rem;
    }
}

@media (min-width: 1000px) {
    #skillTag {
        font-size: 1.2rem;
    }
}

#skillTag {
    border-radius: 1rem;
    display: inline-block;
    padding-left: .5rem;
    padding-right: .5rem;
    padding-top: 0rem;
    padding-bottom: .25rem;
    font-family: 'Michroma';
    margin: .75rem;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 1s ease-out, transform 1s ease-out;
}

.skillTag-visible {
    opacity: 1 !important;
    transform: translateY(0) !important;
}
</style>
