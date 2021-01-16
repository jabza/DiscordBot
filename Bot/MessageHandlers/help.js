export const HelpMessage = {
	color: 0x0099ff,
	title: "Help",
	url: "https://discord.js.org",
	author: {
		name: "HappyFriendTimeBot",
		icon_url: "https://i.imgur.com/wSTFkRM.png",
		url: "https://discord.js.org",
	},
	description: "Commands the bot responds to",
	thumbnail: {
		url: "https://i.imgur.com/wSTFkRM.png",
	},
	fields: [
		{
			name: "?randomname",
			value: "Gives you back a random name.",
		},
		{
			name: "?combine :emoji: :emoji:",
			value:
				"Creates an image combining X emojis together (can pass in any amount). Must use the actual emoji rather than the name. Optionally add paranthesis after the emoji to override x,y,width,height. Image size is 128, 128, and the top left of the image is 0,0. E.G: ?combine :joy:(0,0,64,32) :x:",
		},
		{
			name: "?meme :emoji: first line - second line",
			value: "Posts an emoji with text overlay.",
		},
		{
			name: "?genre",
			value:
				"Gets a random genre from EveryNoise as well as a Spotify playlist link.",
		},
		{
			name: '?remindme length_of_time "message"',
			value:
				'Creates a reminder with a custom message. E.G. `?remindme in 1 hour "Take the bins out."`. Use this as a reference for how to input length of time https://www.npmjs.com/package/chrono-node. Things like `?remindme next tuesday 3pm "meeting"`',
		},
	],
	timestamp: new Date(),
	footer: {
		text: "Let James know of any problems / suggestions",
		icon_url: "https://i.imgur.com/wSTFkRM.png",
	},
};

module.exports = function (msg, args) {
	msg.channel.send({ embed: HelpMessage });
};
