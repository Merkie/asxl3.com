<script lang="ts">
  let scrollY: number;
</script>

<svelte:window bind:scrollY />

<div
  class="h-[400px] md:h-[300px] bg-gradient-to-r from-navy-blue-500 to-cerulean-500 relative overflow-hidden"
>
  <div
    style={`background-image: url("https://www.transparenttextures.com/patterns/snow.png"); background-position: center ${
      scrollY / 4
    }px; `}
    class="absolute top-0 left-0 w-full h-full hero"
  >
    <div
      class="flex items-center justify-between h-full w-[80%] max-w-[1400px] mx-auto relative"
    >
      <span
        class="absolute z-20 top-[90px] left-[170px] -translate-x-1/2 -translate-y-1/2 w-max md:static md:-translate-y-0 md:-translate-x-0"
      >
        <h1 class="text-3xl md:text-5xl font-bold text-white mb-2">
          Navigating life with ASXL3
        </h1>
        <p class="md:text-lg text-white">
          A guide for families and patients <a
            href=""
            class="border whitespace-nowrap text-sm transition p-1 px-2 rounded-md ml-2 hover:text-navy-blue-500 hover:bg-white"
            >Read article <i class="bi bi-arrow-right" /></a
          >
        </p>
      </span>
      <img
        class="h-[400px] w-[400px] md:h-[500px] md:w-[500px] object-cover rounded-full absolute bottom-[-155px] right-[-100px] md:static"
        style={`transform: translateY(-${scrollY / 3}px);`}
        src="/family-pic.png"
        alt=""
      />
    </div>
  </div>
</div>
