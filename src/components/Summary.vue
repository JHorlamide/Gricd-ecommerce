<template>
  <div
    class="flex flex-col lg:h-screen h-auto lg:px-8 md:px-7 px-4 lg:py-20 md:py-10 py-6 justify-between overflow-y-auto"
  >
    <div>
      <p class="lg:text-4xl text-3xl font-black leading-9 text-gray-800">
        Summary
      </p>
      <div class="flex items-center justify-between pt-16">
        <p class="text-base leading-none text-gray-800">Subtotal</p>
        <p class="text-base leading-none text-gray-800">$9,000</p>
      </div>
      <div class="flex items-center justify-between pt-5">
        <p class="text-base leading-none text-gray-800">Shipping</p>
        <p class="text-base leading-none text-gray-800">$30</p>
      </div>
      <div class="flex items-center justify-between pt-5">
        <p class="text-base leading-none text-gray-800">Tax</p>
        <p class="text-base leading-none text-gray-800">$35</p>
      </div>
    </div>
    <div>
      <div class="flex items-center pb-6 justify-between lg:pt-5 pt-20">
        <p class="text-2xl leading-normal text-gray-800">Total</p>
        <p class="text-2xl font-bold leading-normal text-right text-gray-800">
          $10,240
        </p>
      </div>
      <button
        onclick="checkoutHandler(true)"
        class="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white"
      >
        Checkout
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SummaryComponent",
};
</script>

<style lang="scss" scoped></style>
