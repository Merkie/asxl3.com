<script lang="ts">
	import { signOut } from 'lucia-sveltekit/client';
	import convert from 'image-file-resize';

	//TODO: add type definitions for data
	export let data: { data: { email: string }; success: boolean };

	let files: FileList;
	let imagepath: string;

	// TODO: abstact this function
	async function getBase64(file: File) {
		// Convert the image to dimensions 150x150
		convert({
			file,
			width: 150,
			height: 150,
			type: 'jpeg'
		}).then((image: File) => {
			// Read the file
			const reader = new FileReader();
			reader.readAsDataURL(image);

			// After read, send the image data to the server
			reader.onload = async (e) => {
				// Get the server response
				const response = await fetch('/api/upload', {
					method: 'POST',
					body: JSON.stringify({
						file: (e.target?.result || "").toString().split(',')[1],
						filename: image.name
					})
				});

				// Get the response data, this will return a path
				const data = await response.json();

				// Send the path to the <img /> component
				imagepath = data.path.split('/static/')[1];
			};
		});
	}
</script>

<p>Profile for: {data.data.email}</p>

<input type="file" accept=".png,.jpg" bind:files on:change={() => getBase64(files[0])} />
<img src={imagepath} alt="">
<button on:click={signOut}>Sign out</button>
