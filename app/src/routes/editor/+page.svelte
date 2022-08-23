<script lang="ts">
  import { onMount } from "svelte";

  let editor: any;
	
	export let toolbarOptions = [
		[{ header: 1 }, { header: 2 }, "blockquote", "link", "image", "video"],
		["bold", "italic", "underline", "strike"],
		[{ list: "ordered" }, { list: "ordered" }],
		[{ align: [] }],
		["clean"]
	];
	
  onMount(async () => {
		const { default: Quill } = await import("quill");
	
    let quill = new Quill(editor, {
      modules: {
        toolbar: toolbarOptions
      },
      theme: "snow",
      placeholder: "Write your story..."
    });
  });
</script>

<div class="editor-header">
  <h3>Editing article: <span contenteditable="true" >Click me to edit the title!</span></h3>
  <div style="flex: 1"/>
  <button class="secondary">Preview</button><button class="secondary">Draft</button><button>Publish</button>
</div>
<div class="editor-wrapper">
  <div class="editor" bind:this={editor} />
</div>

<style>
  @import 'https://cdn.quilljs.com/1.3.6/quill.snow.css';
  .editor {
    border: none;
    font-size: 1.3em;
  }

  h3 > span {
    color: var(--VERMILION3);
  }

  .editor-header {
    display: flex;
    gap: 5px;
    align-items: center;
  }

  button {
    border: 1px solid var(--VERMILION4);
    background-color: var(--VERMILION3);
    color: white;
    font-size: 1rem;
    height: fit-content;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
    transition-duration: .2s;
  }

  button:hover {
    background-color: transparent;
    color: var(--VERMILION3);
    border-color: var(--VERMILION4);
    transform: scale(1.1);
  }

  .secondary {
    background-color: transparent;
    color: var(--VERMILION3);
    border-color: var(--VERMILION4);
  }

  .secondary:hover {
    border: 1px solid var(--VERMILION4);
    background-color: var(--VERMILION3);
    color: white;
    transform: scale(1.1);
  }
</style>