<script>
  let mobileMenuOpen = false;
</script>

<button
  on:click={() => (mobileMenuOpen = !mobileMenuOpen)}
  class="transition md:hidden text-navy-blue-500 hover:underline"
  ><i class="bi bi-list text-2xl" />
</button>

{#if mobileMenuOpen}
  <main
    on:click={(e) => {
      if (e.target.tagName === "MAIN") mobileMenuOpen = false;
    }}
    on:keypress={(e) => {
      if (e.key === "Escape") mobileMenuOpen = false;
    }}
    class="fixed w-full top-[80px] left-0 h-full bg-[rgba(0,0,0,0.5)]"
  >
    <div class="bg-white w-full p-4 gap-4 text-lg flex flex-col">
      <a
        class="transition text-navy-blue-500 hover:underline"
        href="/information">Patient & Family Resources</a
      >
      <a class="transition text-navy-blue-500 hover:underline" href="/families"
        >Meet The Families</a
      >
      <a
        class="transition text-center border border-navy-blue-500 rounded-md p-2 px-4 text-navy-blue-500 hover:bg-navy-blue-500 hover:text-white"
        href="/facebook"
        target="_blank"
      >
        <i class="bi bi-facebook" />
        ASXL3 Families Group
      </a>
      <a
        href="/donate"
        class="transition text-center bg-navy-blue-500 text-white rounded-md p-2 px-4 font-bold hover:bg-razzmatazz-500"
        >DONATE</a
      >
    </div>
  </main>
{/if}
