<script lang="ts">
	import { signOut } from 'lucia-sveltekit/client';

	//TODO: add type definitions for data
	export let data: { data: { email: string }; success: boolean };
</script>

<p>Profile for: {data.data.email}</p>
<button on:click={signOut}>Sign out</button>
