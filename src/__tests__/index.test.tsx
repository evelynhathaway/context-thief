import React from "react";
import {render} from "@testing-library/react";
import {createContextThief} from "..";


const TestContext = React.createContext(false);

const TestComponent: React.FC = ({children}) => {
	return <TestContext.Provider value={true}>{children}</TestContext.Provider>;
};

describe("when never rendered", () => {
	it("should not have a current context value", () => {
		const {contextValue} = createContextThief(TestContext);

		// No context value set
		expect(contextValue.current).toBe(undefined);
	});
});

describe("when context provider is not rendered", () => {
	it("should have the default current context value", () => {
		const {ContextThief, contextValue} = createContextThief(TestContext);

		render(
			<ContextThief />
		);

		// Context value default
		expect(contextValue.current).toBe(false);
	});
});

describe("when context provider is rendered", () => {
	it("should have the current context value", () => {
		const {ContextThief, contextValue} = createContextThief(TestContext);

		render(
			<TestComponent>
				<ContextThief />
			</TestComponent>
		);

		// Context value set
		expect(contextValue.current).toBe(true);
	});
});
