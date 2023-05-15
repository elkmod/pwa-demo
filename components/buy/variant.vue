<!-- variant.vue -->

<script setup lang="ts">
const {
  handleChange,
  getOptionGroups,
  getSelectedOptions,
  findVariantForSelectedOptions,
} = useProductConfigurator();

const isOptionSelected = (optionId: string) =>
  Object.values(getSelectedOptions.value).includes(optionId);

const { changeVariant } = useProduct();

const onHandleChange = async () => {
  const variant = await findVariantForSelectedOptions(getSelectedOptions.value);

  if (!variant) {
    return;
  }
  changeVariant(variant);
};
</script>

<template>
  <div class="text-center">
    <div
      v-for="optionGroup in getOptionGroups"
      :key="optionGroup.id"
      class="mt-6"
    >
      <div class="flex justify-center">
        <div
          v-for="option in optionGroup.options"
          :key="option.id"
          data-testid="product-variant"
          class="flex flex-col items-center justify-center w-16 h-16 m-2 rounded-full hover:opacity-75 cursor-pointer"
          :style="{ backgroundColor: option.colorHexCode }"
          :class="{
            'border-4 border-black': isOptionSelected(option.id),
          }"
          @click="handleChange(optionGroup.name, option.id, onHandleChange)"
        ></div>
      </div>
    </div>
  </div>
</template>
