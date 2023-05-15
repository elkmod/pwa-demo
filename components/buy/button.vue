<!-- button.vue -->

<script setup lang="ts">
const { product } = useProduct();
const { addToCart } = useAddToCart(product)
</script>

<template>
    <button class="bg-indigo-600 inline-block p-4 px-5 rounded-full text-white mt-5" @click="addToCart">
        Buy now
    </button>
</template> 