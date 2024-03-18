import assert from "assert";
import { Problem } from "../types/problem";

export const jumpGameHandler = (fn: any) => {
	try {
		const tests = [
			[2, 3, 1, 1, 4],
			[3, 2, 1, 0, 4],
			[2, 0, 0],
			[2, 5, 0, 0],
		];
		const answers = [true, false, true, true];
		for (let i = 0; i < tests.length; i++) {
			const result = fn(tests[i]);
			assert.equal(result, answers[i]);
		}
		return true;
	} catch (error: any) {
		console.log("Error from jumpGameHandler: ", error);
		throw new Error(error);
	}
};

const starterCodeJumpGameJS = `function canJump(nums) {
  // Write your code here
};`;

export const jumpGame: Problem = {
	id: "jump-game",
	docUrl: 'https://s2.q4cdn.com/470004039/files/doc_earnings/2023/q4/filing/_10-K-Q4-2023-As-Filed.pdf',
	title: "1. Apple Inc.",
	problemStatement: `<p class='mt-3'>
    Given is the Annual Financial Report of Apple Inc. for the financial year of 2023.
  </p>
    <p class='mt-3'>
    Evaluate the financial model for the next 3 Financial Years.
    </p>
  `,

	examples: [
		{
			id: 0,
			inputText: `nums = [2,3,1,1,4]`,
			outputText: `true`,
			explanation: "Jump 1 step from index 0 to 1, then 3 steps to the last index.",
		},
		{
			id: 1,
			inputText: `nums = [3,2,1,0,4]`,
			outputText: `false`,
			explanation:
				"You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.",
		},
	],
	constraints: `<li class='mt-2'><code>1 <= nums.length <= 10^4</code></li>
    <li class='mt-2'><code>0 <= nums[i] <= 10^5</code></li>`,
	starterCode: starterCodeJumpGameJS,
	handlerFunction: jumpGameHandler,
	starterFunctionName: "function canJump(",
	order: 3,
};
