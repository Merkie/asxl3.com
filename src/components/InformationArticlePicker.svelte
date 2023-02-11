<script>
  import articles from "../articles/index";

  let showingMobileArticleMenu = false;
</script>

<button
  on:click={() => (showingMobileArticleMenu = !showingMobileArticleMenu)}
  class={`${
    showingMobileArticleMenu ? "fixed bottom-8 left-8" : "absolute top-8"
  } bg-navy-blue-500 hover:bg-cerulean-500 rounded-md p-2 px-4 text-white md:hidden block z-30`}
>
  <i class={"bi bi-" + (showingMobileArticleMenu ? "x-lg" : "list-ul")} />
  <span>{showingMobileArticleMenu ? "Close Menu" : "View All Articles"}</span>
</button>

{#if showingMobileArticleMenu}
  <main
    class="fixed top-[80px] left-0 bg-[rgba(0,0,0,0.5)] w-full h-full z-10 block: md:hidden"
  />
{/if}

<div
  class={`pt-8 border border-y-0 border-l-0 border-slate-200 flex-col w-[250px] bg-white ${
    showingMobileArticleMenu
      ? "flex fixed h-full z-20 left-0 top-[80px] md:static md:h-auto"
      : "hidden"
  } md:flex`}
>
  {#each articles as article}
    {#if article.content.length < 1}
      <a
        href={"/information" + article.link}
        class="text-left block capitalize border transition cursor-pointer border-x-0 border-t-0 p-2 px-4 font-semibold text-cerulean-500 hover:text-razzmatazz-500"
      >
        {article.title}
      </a>
    {:else}
      <div>
        <a
          href={"/information" + article.link}
          class="text-left block capitalize transition cursor-pointer pt-2 px-4 font-semibold text-cerulean-500 hover:text-razzmatazz-500"
        >
          {article.title}
        </a>
        {#each article.content as subheading, i}
          {#if subheading.heading}
            {#if subheading.heading.toLowerCase() !== "conclusion"}
              <a
                href={"/information" +
                  article.link +
                  "#" +
                  subheading.heading.replaceAll(" ", "-")}
                class={`text-left block text-sm capitalize cursor-pointer p-1 px-4 hover:text-razzmatazz-500 ${
                  i === article.content.length - 1
                    ? "border-b border-slate-200 pb-2 w-full"
                    : ""
                }`}
              >
                {subheading.heading}
              </a>
            {/if}
          {/if}
        {/each}
      </div>
    {/if}
  {/each}
</div>
