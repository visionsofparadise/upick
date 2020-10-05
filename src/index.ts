export const upick = <T, S extends keyof T>(obj: T, keys: Array<S>): Pick<T, S> => {
	const newObj: any = {};
	keys.forEach(key => {
		newObj[key] = obj[key];
	});

	return newObj;
};

export default upick;
