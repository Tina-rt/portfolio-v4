<template>
    <div v-if="show" class="cursor " :class="{ 'click-event': click_event, 'is-hovering': isHovering }" :style="{
        top: y + 'px',
        left: x + 'px',
        width: radius + 'px',
        height: radius + 'px'
    }"></div>
</template>

<style scoped>
.cursor {
    /* border: 1px solid rgba(255, 255, 255, 0.499); */
    background: #fff;
    border-radius: 50%;
    position: fixed;
    z-index: 999999;
    top: 0;
    left: 0;
    opacity: 1;
    transition: transform 0.2s ease-in-out, opacity 0.4s ease, background 0.4s ease;
    pointer-events: none;
}

.is-hovering {
    transform: scale(2.3);
    /* opacity: 1; */
    background: rgb(255, 255, 255);
    mix-blend-mode: difference;


}

.click-event {
    transform: scale(3);
}
</style>

<script setup lang="ts">

const x = ref(0)
const y = ref(0);

const radius = ref(20);

const show = ref(false);
const click_event = ref(false);
const isHovering = ref(false);

const hoverableItems = '.btn, a, button, input, select, .card, .tile, h1, span, p, img'

const handleMouseOver = (e: any) => {
    const target = e.target;
    const isInteractive = target?.matches(hoverableItems) || target?.closest(hoverableItems)
    isHovering.value = isInteractive ? true : false;
}

onMounted(() => {
    document.body.style.cursor = 'none'
    document.addEventListener('mousemove', function (event) {
        if (!show.value) {
            show.value = true;
        }
        setTimeout(() => {
            const x_ = event.clientX;
            const y_ = event.clientY;
            x.value = x_ - (radius.value / 2);
            y.value = y_ - (radius.value / 2);
        }, 100);
        handleMouseOver(event)

    });

    document.addEventListener('click', (e) => {
        click_event.value = true;
        setTimeout(() => {
            click_event.value = false;
        }, 200);
    })
})
onUnmounted(() => {
    document.body.style.cursor = 'auto'
})
// document.addEventListener('scroll', function (event) {
//     const prev_x = x.value;
//     const x_ = x.value + window.scrollX;
//     const y_ = y.value + window.scrollY;
//     x.value = x_ - 25;
//     y.value = y_ - 25;
// });


</script>