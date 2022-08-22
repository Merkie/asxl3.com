<script>
	import { Colors } from '$lib/colors';
	import { Icon, Search, Menu } from 'svelte-hero-icons';
	import { clickOutside } from '$lib/clickOutside';

	$: cssVarStyles = Object.entries(Colors)
		.map(([key, value]) => `--${key}:${value}`)
		.join(';');

	let mobilePopoutVisible = '-100%';
</script>

<div style={cssVarStyles}>
	<nav>
		<a href="/" class="brand">ASXL-3</a>
		<div class="search">
			<Icon width="20px" color="white" src={Search} solid />
			<input placeholder="Search..." type="text" />
		</div>
		<!-- spacer flex -->
		<div style="flex: 1;" />
		<!-- Hidden mobile menu -->
		<span
			on:click={() => {
				mobilePopoutVisible = '0px';
			}}
			class="mobile-menu"
		>
			<Icon width="25px" color="white" src={Menu} solid />
		</span>
		<!-- Desktop Links -->
		<span class="desktop-links">
			<a href="/portal">Login/Signup</a>
		</span>
	</nav>
	<!-- this will return a TS error because this custom attribute is not on the official props list. Ignore it. -->
	<div
		use:clickOutside
		on:click_outside={() => (mobilePopoutVisible = '-100%')}
		style={`--popout-status: ${mobilePopoutVisible}`}
		class="mobile-menu-popout"
	>
    <!-- Content in the sidebar -->
		<p>Link 1</p>
    <p>Link 2</p>
    <p>Link 3</p>
    <!-- End content in the sidebar -->
	</div>
	<main><slot /></main>
</div>

<style>
	/* Remove margin from the body globally and apply the font family */
	:global(body) {
		margin: 0;
		font-family: 'Titillium Web', sans-serif;
	}

	/* Navigation work */

	nav {
		display: flex;
		align-items: center;
		padding: 0.5rem;
		background: var(--VERMILION3);
		border-bottom: var(--VERMILION4) 2px solid;
	}

	nav a {
		color: white;
		text-decoration: none;
		padding: 0.5rem;
	}

	.brand {
		font-size: 1.75rem;
		font-weight: bold;
		color: white;
	}

	.mobile-menu {
		display: none;
		align-items: center;
		padding-right: 0.5rem;
		cursor: pointer;
	}

	/* Search */

	.search {
		display: flex;
		align-items: center;
		background-color: inherit;
		padding-left: 0.5rem;
		gap: 0.5rem;
		border-radius: 5px;
	}

	input {
		height: 30px;
		font-size: 1.2rem;
		color: white;
		background: transparent;
		border: none;
		outline: none;
	}

	.search:focus-within {
		background-color: var(--VERMILION4);
	}

	/* Main content */

	main {
		width: min(1200px, 95%);
		margin: 0 auto;
	}

	/* Mobile menu popout */
	.mobile-menu-popout {
		position: fixed;
		top: 0;
		right: var(--popout-status);
		width: min(75%, 250px);
		height: 100%;
		background-color: var(--LIGHT_GRAY1);
		filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5));
		z-index: 1;
		transition-duration: 0.3s;
	}

	@media (max-width: 615px) {
		.desktop-links {
			display: none;
		}
		.mobile-menu {
			display: flex;
		}
		input {
			width: 150px;
		}
	}
</style>
