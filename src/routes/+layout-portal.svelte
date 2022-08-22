<script>
	import { Colors } from '@blueprintjs/core';

	$: cssVarStyles = Object.entries(Colors)
		.map(([key, value]) => `--${key}:${value}`)
		.join(';');
</script>

<div style={cssVarStyles}><slot /></div>
