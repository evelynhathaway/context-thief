import React, {useContext} from "react";


export interface ContextValueRef<ContextValue> {
	current?: ContextValue;
}

const createContextThief = <ContextValue extends unknown> (context: React.Context<ContextValue>): {
	ContextThief: React.FC;
	contextValue: ContextValueRef<ContextValue>;
} => {
	const contextValue: ContextValueRef<ContextValue> = {};
	const ContextThief: React.FC<{children?: React.ReactNode | undefined}> = ({children}) => {
		const value = useContext(context);
		contextValue.current = value;
		return <>{children}</>;
	};
	return {
		ContextThief,
		contextValue,
	};
};

export {createContextThief};
export default createContextThief;
