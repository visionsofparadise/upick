import { upick } from '.';

it('picks a subset of keys from an object', () => {
	const object = {
		a: 'a',
		b: 'b',
		c: 'c'
	};

	const result = upick(object, ['a', 'c']);

	expect(result).toStrictEqual({
		a: 'a',
		c: 'c'
	});
});
