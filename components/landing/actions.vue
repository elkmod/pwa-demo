<script setup>
defineProps({
  product: {
    type: Object,
    required: false,
  },
})
</script>

<template>
  <div v-if="product">
    <!-- Qty selection -->
    <div class="mb-10">
      <h4 class="mb-3 font-heading font-medium">Qty:</h4>
      <input
        class="w-24 px-3 py-2 text-center bg-white border-2 border-blue-500 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
        type="text"
        placeholder="1"
      />
    </div>
    <!-- Add to bag & wishlist buttons -->
    <div class="flex flex-wrap -mx-2 mb-12">
      <div class="w-full md:w-2/3 px-2 mb-2 md:mb-0">
        <a
          class="block py-4 px-2 leading-8 font-heading font-medium tracking-tighter text-xl text-white text-center bg-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:bg-blue-600 rounded-xl"
          href="#"
          >Add to bag</a
        >
      </div>
      <div class="w-full md:w-1/3 px-2">
        <a
          class="flex w-full py-4 px-2 items-center justify-center leading-8 font-heading font-medium tracking-tighter text-xl text-center bg-white focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50 hover:bg-opacity-60 rounded-xl"
          href="#"
        >
          <span class="mr-2">Wishlist</span>
          <svg
            width="23"
            height="22"
            viewbox="0 0 23 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.3235 20.1324L2.52488 10.8515C1.75232 10.0706 1.24237 9.06367 1.06728 7.97339C0.8922 6.88311 1.06086 5.76477 1.54936 4.7768V4.7768C1.91837 4.03089 2.45739 3.3843 3.12201 2.89033C3.78663 2.39635 4.55781 2.06911 5.37203 1.93558C6.18626 1.80205 7.0202 1.86605 7.80517 2.1223C8.59013 2.37855 9.30364 2.81972 9.88691 3.40946L11.3235 4.86204L12.7601 3.40946C13.3434 2.81972 14.0569 2.37855 14.8419 2.1223C15.6269 1.86605 16.4608 1.80205 17.275 1.93558C18.0892 2.06911 18.8604 2.39635 19.525 2.89033C20.1897 3.3843 20.7287 4.03089 21.0977 4.7768V4.7768C21.5862 5.76477 21.7549 6.88311 21.5798 7.97339C21.4047 9.06367 20.8947 10.0706 20.1222 10.8515L11.3235 20.1324Z"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
  <div v-else class="flex">
    <div class="bg-gray-200 text-gray-700 text-lg mt-10 p-3 rounded-md">
      This product is not available yet
    </div>
  </div>
</template>
