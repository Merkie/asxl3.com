export { matchers } from './client-matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6')
];

export const dictionary = {
	"": [[1], [0], 3, 1],
	"account": [[1], [0], 4, 1],
	"editor": [[1], [0], 5, 1],
	"portal": [[1], [2], 6]
};