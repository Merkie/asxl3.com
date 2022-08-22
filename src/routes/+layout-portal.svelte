<script>
	import { Colors } from '$lib/colors';

	$: cssVarStyles = Object.entries(Colors)
		.map(([key, value]) => `--${key}:${value}`)
		.join(';');
</script>

<div style={cssVarStyles}><slot /></div>
