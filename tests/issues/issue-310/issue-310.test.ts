import { readFileSync } from 'fs';
import { resolve } from 'path';
import { format } from 'prettier';
import { plugin } from './../../../src/index';

describe('Issues', () => {
	test('should format v-t directive from vue-i18n', () => {
		const expected: string = readFileSync(resolve(__dirname, 'formatted.pug'), 'utf8');
		const code: string = readFileSync(resolve(__dirname, 'unformatted.pug'), 'utf8');
		const actual: string = format(code, { plugins: [plugin], parser: 'pug', pugFramework: 'vue' });

		expect(actual).toBe(expected);
	});
});
