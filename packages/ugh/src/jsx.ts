import { UGH_ELEMENT_TYPE } from 'shared/UghSymbols';
import { ElementType, Key, Props, Ref, UghElementType } from 'shared/UghTypes';

// ReactElement
const UghElement = function (
	type: ElementType,
	key: Key,
	ref: Ref,
	props: Props
): UghElementType {
	const element = {
		$$typeof: UGH_ELEMENT_TYPE,
		type,
		key,
		ref,
		props,
		__mark: 'fake'
	};
	return element;
};

const jsx = (
	type: ElementType,
	config: Record<string, unknown>,
	...maybeChildren: Array<UghElementType>
) => {
	let key: Key = '';
	const props: Props = {};
	let ref: Ref;

	for (const prop in config) {
		const val = config[prop];
		if (prop === 'key') {
			if (val !== undefined) {
				key = '' + val;
			}
			continue;
		}
		if (prop === 'ref') {
			if (val !== undefined) {
				ref = val;
			}
		}
		if ({}.hasOwnProperty.call(config, prop)) {
			props[prop] = val;
		}
	}

	const maybeChildrenLength = maybeChildren.length;

	if (maybeChildrenLength) {
		if (maybeChildrenLength === 1) {
			props.children = maybeChildren[0];
		} else {
			props.children = maybeChildren;
		}
	}

	return UghElement(type, key, ref, props);
};

const jsxDEV = (type: ElementType, config: Record<string, unknown>) => {
	let key: Key = '';
	const props: Props = {};
	let ref: Ref;

	for (const prop in config) {
		const val = config[prop];
		if (prop === 'key') {
			if (val !== undefined) {
				key = '' + val;
			}
			continue;
		}
		if (prop === 'ref') {
			if (val !== undefined) {
				ref = val;
			}
		}
		if ({}.hasOwnProperty.call(config, prop)) {
			props[prop] = val;
		}
	}

	return UghElement(type, key, ref, props);
};
export { jsx, jsxDEV };
