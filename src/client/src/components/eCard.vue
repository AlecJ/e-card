<template>
    <div class="row">
        <gameCard card-type="emperor" />
        <gameCard card-type="slave" />
    </div>
</template>

<script>
    import io from "socket.io-client";
    import gameCard from './gameCard.vue'
    export default {
        name: 'e-card',
        components: {
            gameCard
        },
        data() {
            return {
                socket: {},
                context: {},
                position: {
                    x: 0,
                    y: 0
                }
            }
        },
        created() {
            this.socket = io({ path: '/api' });
        },
        mounted() {
            this.context = this.$refs.game.getContext("2d");

            this.socket.on("position", data => {
                this.position = data;
                this.context.clearRect(0, 0, this.$refs.game.width, this.$refs.game.height);
                this.context.fillStyle = "#FFFFFF";
                this.context.fillRect(0, 0, this.$refs.game.width, this.$refs.game.width);
                this.context.fillStyle = "#000000";
                this.context.fillRect(this.position.x, this.position.y, 20, 20);
            });
        },
        methods: { 
            move(direction) { this.socket.emit("move", direction); },
        }
    }
</script>

<style scoped>
.row {
    display: grid;
    grid-template-columns: 1fr 1fr;
}
</style>