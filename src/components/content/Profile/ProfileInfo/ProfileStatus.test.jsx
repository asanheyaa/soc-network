import React from "react";
import { create } from "react-test-renderer";
import ProfileStatusComponent from "./ProfileStatus";

describe("ProfileStatus component", () => {
	test("status from props should be in the state", () => {
		const component = create(<ProfileStatusComponent status="SUBSCRIBE TO BASIC" />);
		const instance = component.getInstance();
		expect(instance.state.inputText).toBe("SUBSCRIBE TO BASIC");
	});
	test("after creation span should be displayed with correct status", () => {
		const component = create(<ProfileStatusComponent />);
		const root = component.root;
		let div = root.findByType('div');
		expect(div).not.toBeNull();
	});
	test("after creation span should be displayed with correct status", () => {
		const component = create(<ProfileStatusComponent />);
		const root = component.root;
		expect(() => {
			let input = root.findByType('input');
			
		}).toThrow();
	});
});

