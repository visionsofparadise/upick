# μpick

A typescript pick utility.

## Features

- returns an object with a subset of keys and values from a given object
- type safe.
- smallest possible size and lightest cpu load

## Usage

### install

> npm i upick

### import

> import upick from 'upick'

### use μpick

Give μpick an object and the desired keys to pick.

>     const object = {
>     	a: 'a',
>     	b: 'b',
>     	c: 'c'
>     };
>
>     const result = upick(object, ['a', 'c']);
>
>     expect(result).toStrictEqual({
>     	a: 'a',
>     	c: 'c'
>     });
