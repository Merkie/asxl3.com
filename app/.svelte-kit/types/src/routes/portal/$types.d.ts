import type * as Kit from '@sveltejs/kit';

interface RouteParams extends Partial<Record<string, string>> {}

export type Errors = null;
export type PageData = Omit<import('../$types.js').LayoutData.portal, keyof Kit.AwaitedProperties<Awaited<ReturnType<typeof import('../../../../../src/routes/portal/+page.server.js').load>>>> & Kit.AwaitedProperties<Awaited<ReturnType<typeof import('../../../../../src/routes/portal/+page.server.js').load>>>;
export type PageServerData = Kit.AwaitedProperties<Awaited<ReturnType<typeof import('../../../../../src/routes/portal/+page.server.js').load>>>;
export type PageServerLoad<OutputData extends Record<string, any> | void = Record<string, any> | void> = Kit.ServerLoad<RouteParams, import('../$types.js').LayoutServerData.portal, OutputData>;
export type PageServerLoadEvent = Parameters<PageServerLoad>[0];
export type Action = Kit.Action<RouteParams>