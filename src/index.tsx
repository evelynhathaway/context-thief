import React, {useContext} from "react";


// eslint-disable-next-line unicorn/prevent-abbreviations
export interface ContextValueRef<ContextValue> {
	current?: ContextValue;
}

const createContextThief = <ContextValue extends unknown> (context: React.Context<ContextValue>): {
	ContextThief: React.FC;
	contextValue: ContextValueRef<ContextValue>;
} => {
	const contextValue: ContextValueRef<ContextValue> = {};
	const ContextThief: React.FC = ({children}) => {
		const value = useContext(context);
		contextValue.current = value;
		// eslint-disable-next-line react/jsx-no-useless-fragment
		return <>{children}</>;
	};
	return {
		ContextThief,
		contextValue,
	};
};

export {createContextThief};
export default createContextThief;
