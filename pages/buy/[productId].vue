<!-- [productId].vue -->
<script setup lang="ts">
const route = useRoute();
const productId = route.params.productId as string;

// Search product
const { search } = useProductSearch();
const productResponse = await search(productId);

// Share product across components
const { product } = useProduct(productResponse.product, productResponse.configurator);

// Refresh context (so we can get proper price formatting)
const { refreshSessionContext } = useSessionContext();
const { getFormattedPrice } = usePrice();
onMounted(refreshSessionContext);
</script>

<template>
  <div class="text-center">
    <h1 class="text-5xl font-semibold mb-16">Choose your color</h1>
    <BuyVariant/>

    <h2 class="text-3xl font-semibold mt-16">Apple iPhone 12 Pro (128GB)</h2>
    <!-- Price -->
    <div class="mt-4">
      <span class="text-2xl text-gray-500">{{ getFormattedPrice(product.calculatedPrice.totalPrice) }}</span>
    </div>

    <BuyButton />
  </div>
</template>
