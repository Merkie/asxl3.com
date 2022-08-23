<script lang="ts">
	import { signOut } from 'lucia-sveltekit/client';
	import { Icon, Pencil } from 'svelte-hero-icons';
	
	interface Idata {
		user: any;
	}
	export let data: Idata;

	let selectedElement = 'account';

	const signoutUser = () => {
		try {
			// signout then redirect to home page
			signOut().then(() => {
				window.location.replace('/');
			});
		} catch (e) {}
	};
</script>

<h1 class="header-links">
	<span
		class={`${selectedElement === 'account' ? 'selected' : ''}`}
		on:click={() => (selectedElement = 'account')}>Account</span
	>
	<span
		class={`${selectedElement === 'articles' ? 'selected' : ''}`}
		on:click={() => (selectedElement = 'articles')}>Articles</span
	>
	<span
		class={`${selectedElement === 'danger' ? 'selected' : ''}`}
		on:click={() => (selectedElement = 'danger')}>Danger Zone</span
	>
</h1>

<div class="account-page" style={`display: ${selectedElement === 'account' ? 'block' : 'none'}`}>
	<h2>Your information</h2>
	<p>
		<b>Display name: </b> <span>{data.user.name}</span>
		<button class="change-btn"><Icon src={Pencil} /></button>
	</p>
	<p>
		<b>Email Address: </b> <span>{data.user.email}</span>
		<button class="change-btn"><Icon src={Pencil} /></button>
	</p>
	<p>
		<b>Profile Image: </b> <img src={data.user.profileimage} alt="" />
		<button class="change-btn"><Icon src={Pencil} /></button>
	</p>
	<button on:click={signoutUser} class="logout-btn">
		Logout
	</button>
</div>

<div class="articles-page" style={`display: ${selectedElement === 'articles' ? 'block' : 'none'}`}>
	<button class="new-article-btn" on:click={() => window.location.href = '/editor'}>+ Create new article</button>
	<h2>Your articles</h2>
	<i style={`display: ${data.user.articles ? 'none' : 'block'}`}>*crickets*</i>
</div>

<div class="danger-page" style={`display: ${selectedElement === 'danger' ? 'block' : 'none'}`}>
	<button class="delete-btn">Delete your account</button>
</div>

<!-- <div class="flex">
	<div class="flex-header">
		<img src={data.user.profileimage} alt="" />
		<span class="account-details">
			<h3>{data.user.name}</h3>
			<p>{data.user.email}</p>
			<div style="flex: 1;"></div>
			<button on:click={signoutUser}>Sign out</button>
		</span>
	</div>
</div>
<input type="file" accept=".png,.jpg" bind:files on:change={() => getBase64(files[0])} />
 -->
<style>
	.header-links {
		display: flex;
		gap: 1rem;
		align-items: center;
		margin-bottom: 1rem;
	}

	.header-links span {
		cursor: pointer;
		transition-duration: 0.1s;
		border-bottom: 4px solid transparent;
	}

	p {
		display: flex;
		gap: 10px;
		align-items: center;
	}

	img {
		width: 50px;
		border-radius: 100%;
	}

	.header-links span:hover {
		transform: translate(0, -3px);
	}

	.selected {
		color: var(--VERMILION3);
		border-color: var(--VERMILION3) !important;
	}

	.change-btn {
		width: 30px;
		height: 30px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 100%;
	}

	.delete-btn {
		background-color: var(--RED3);
		color: var(--WHITE);
		border: none;
		padding: 0.5rem 1rem;
		border-radius: 5px;
		font-size: 1.2rem;
		font-weight: bold;
		cursor: pointer;
		transition-duration: 0.1s;
	}

	.delete-btn:hover, .new-article-btn:hover, .logout-btn:hover {
		transform: scale(1.05);
	}

	.new-article-btn, .logout-btn {
		background-color: var(--VERMILION3);
		color: var(--WHITE);
		border: none;
		padding: 0.5rem 1rem;
		border-radius: 5px;
		font-size: 1.2rem;
		font-weight: bold;
		cursor: pointer;
		transition-duration: 0.1s;
	}
</style>
