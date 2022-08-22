import type * as Kit from '@sveltejs/kit';

interface RouteParams extends Partial<Record<string, string>> {}
interface LayoutParams extends RouteParams {}

export type Errors = undefined;
export type PageData = LayoutData;
export type PageServerData = null;
export type LayoutData = Record<never, never>;
export type LayoutServerData = null;

export namespace LayoutData {
	export type portal = Record<never, never>;
}

export namespace LayoutLoad {
	
}

export namespace LayoutLoadEvent {
	
}

export namespace LayoutServerData {
	export type portal = null;
}

export namespace LayoutServerLoad {
	
}

export namespace LayoutServerLoadEvent {
	
}