import React, {useContext} from "react";


export interface ContextValueRef<ContextValue> {
	current?: ContextValue;
}

const createContextThief = <ContextValue extends unknown> (context: React.Context<ContextValue>): {
	ContextThief: React.FC;
	contextValue: ContextValueRef<ContextValue>;
} => {
	const contextValue: ContextValueRef<ContextValue> = {};
	return {
		ContextThief: ({children}) => {
			const value = useContext(context);
			contextValue.current = value;
			return <>{children}</>;
		},
		contextValue,
	};
};

export {createContextThief};
export default createContextThief;
