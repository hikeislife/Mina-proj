export const items = [
	{
		_id: "mp",
		content: "",
		selected: false,
	},
	{
		_id: "hc",
		content: "HTML & CSS",
		selected: false,
	},
	{
		_id: "gc",
		content: "CMD & Git",
		selected: false,
	},
	{
		_id: "js",
		content: "JavaScript",
		selected: false,
	},
];

export function getTopNav() {
	return items.filter(m => m._id !== "mp");
}