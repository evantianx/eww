export type TypeOf = symbol | number;
export type Key = string;
export type Ref = unknown;
export type Props = Record<string, unknown>;
export type ElementType = string;

export interface UghElementType {
	$$typeof: TypeOf;
	type: ElementType;
	key: Key;
	props: Props;
	ref: Ref;
	__mark: string;
}
