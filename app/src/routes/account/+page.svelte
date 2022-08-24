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

<div class="account-page" style={`display: ${selectedElement === 'account' ? 'flex' : 'none'}`}>
	<div class="left-card">
		<h2>{data.user.name}</h2>
		<div class="profile-image-container">
			<button><Icon size="20px" src={Pencil} /></button>
			<img src={data.user.profileimage} alt="" />
		</div>
		<!-- <button>Upload New Photo</button> -->
		<div class="profile-info-card">
			<p>All images will be automatically resized. Maximum upload size is <b>3MB</b></p>
		</div>
	</div>
	<div class="right-card">
		<h2>Edit Profile</h2>
		<div class="right-inner">
			<div>
				<p>Display Name</p>
				<input type="text" value={data.user.name}>
			</div>
			<div>
				<p>Email Address</p>
				<input type="text" value={data.user.email}>
			</div>
			<div>
				<p>Password</p>
				<input type="password" placeholder="...">
			</div>
			<div>
				<p>Confirm Password</p>
				<input type="password" placeholder="...">
			</div>
			<button style="float: left;" >Update Info</button>
		</div>
	</div>

	<!-- <h2>Your information</h2>
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
	</button> -->
</div>

<div class="articles-page" style={`display: ${selectedElement === 'articles' ? 'block' : 'none'}`}>
	<button class="new-article-btn" on:click={() => (window.location.href = '/editor')}
		>+ Create new article</button
	>
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
	.account-page {
		display: flex;
		justify-content: center;
		flex-direction: row;
		gap: 2rem;
	}

	.right-card {
		width: fit-content;
		background-color: white;	
		border-radius: 5px;
		border: 1px solid var(--GRAY4);
		padding: 1rem;
		padding-right: 2rem;
		gap: 0.5rem;
		display: flex;
		flex-direction: column;
	}

	.right-card * {
		margin: 0;
	}

	.right-inner {
		display: flex;
		/* justify-content: space-evenly; */
		gap: 2rem;
		flex-wrap: wrap;
	}

	.right-inner > div {
		width: 300px;
	}

	input {
		border: 1px solid var(--VERMILION4);
		border-radius: 5px;
		padding: 0.5rem;
		width: 100%;
	}

	.left-card {
		width: min(100%, 300px);
		background-color: white;
		border-radius: 5px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
		border: 1px solid var(--GRAY4);
		padding: 1rem;
	}

	.left-card * {
		margin: 0;
	}

	.profile-image-container {
		position: relative;
	}

	.profile-info-card {
		background-color: var(--LIGHT_GRAY4);
		border: 1px solid var(--GRAY4);
		padding: 10px;
		border-radius: 5px;
		text-align: center;
	}

	.profile-image-container button {
		position: absolute;
		border-radius: 100%;
		width: 35px;
		height: 35px;
		padding: 0;
		background-color: var(--LIGHT_GRAY1);
		color: black;
		border: 3px white solid;
		top: 0;
		right: 0;
	}

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

	/* p {
		display: flex;
		gap: 10px;
		align-items: center;
	} */

	img {
		width: 150px;
		border-radius: 100%;
	}

	.header-links span:hover {
		transform: translate(0, -3px);
	}

	.selected {
		color: var(--VERMILION3);
		border-color: var(--VERMILION3) !important;
	}

	button {
		background-color: var(--VERMILION3);
		color: var(--WHITE);
		border: none;
		padding: 0.5rem 1rem;
		border-radius: 5px;
		font-size: 1rem;
		font-weight: bold;
		cursor: pointer;
		transition-duration: 0.1s;
	}

	button:hover {
		transform: scale(1.05);
	}
</style>
