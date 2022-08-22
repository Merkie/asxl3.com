import type * as Kit from '@sveltejs/kit';

interface RouteParams extends Partial<Record<string, string>> {}

export type Errors = undefined;
export type PageData = import('../$types.js').LayoutData.portal;
export type PageServerData = null;