const supportSymbol = typeof Symbol === 'function' && Symbol.for;

export const UGH_ELEMENT_TYPE = supportSymbol
	? Symbol.for('ugh.element')
	: 0xeac7;
