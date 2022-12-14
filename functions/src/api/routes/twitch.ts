/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express';

import { validateRequest } from '../middleware';

const router = express.Router();
// const sevenDays = 604800000;

// const followChannel = async (user: string, channel: string, method: string) => {
// 	const userInfo = await Api.getUserInfo(user);
// 	const channelInfo = await Api.getUserInfo(channel);
// 	const firebaseId = userInfo.id;
// 	try {
// 		const userFirebaseData = (
// 			await firestore().collection('Streamers').doc(firebaseId).collection('twitch').doc('data').get()
// 		).data();
// 		const refreshData = await Api.fetch(
// 			`https://api.disstreamchat.com/twitch/token/refresh?token=${userFirebaseData.refresh_token}&key=${process.env.DSC_API_KEY}`,
// 		);
// 		await fetch(`https://api.twitch.tv/kraken/users/${userInfo.id}/follows/channels/${channelInfo.id}`, {
// 			method,
// 			headers: {
// 				Accept: 'application/vnd.twitchtv.v5+json',

// 				Authorization: `OAuth ${refreshData.access_token}`,
// 			},
// 			body: '',
// 		});
// 	} catch (err) {
// 		throw err;
// 	}
// };

router.delete('/follow', validateRequest, async (req, res, next) => {
	// const user = req.query.user as string;
	// const channel = req.query.channel as string;
	// try {
	// 	await followChannel(user, channel, 'DELETE');
	// 	res.json('success');
	// } catch (err) {
	// 	next(err);
	// }
});

router.put('/follow', validateRequest, async (req, res, next) => {
	// const user = req.query.user as string;
	// const channel = req.query.channel as string;
	// try {
	// 	await followChannel(user, channel, 'PUT');
	// 	res.json('success');
	// } catch (err) {
	// 	next(err);
	// }
});

router.get('/following', async (req, res, next) => {
	// const { user, key } = req.query;
	// if (!user) {
	// 	res.status(400).json({ messages: 'missing user', code: 400 });
	// }
	// const userData = await Api.getUserInfo(user as string);
	// const id = userData.id;
	// const json = await KrakenApi.fetch(
	// 	`https://api.twitch.tv/kraken/users/${id}/follows/channels?limit=${req.query.limit || 100}`,
	// 	{
	// 		headers: {
	// 			Accept: 'application/vnd.twitchtv.v5+json',
	// 		},
	// 	},
	// );
	// try {
	// 	let followedChannels = [];
	// 	if (!key) {
	// 		followedChannels = json.follows;
	// 	} else {
	// 		followedChannels = json.follows.map((follow: any) => follow.channel[key as string]);
	// 	}
	// 	res.json(followedChannels);
	// } catch (err) {
	// 	res.json(json);
	// }
});

router.get('/user', async (req, res, next) => {
	// const details = await Api.getUserInfo(req.query.user as string);
	// res.json(details);
});

router.post('/automod/:action', validateRequest, async (req, res, next) => {
	// const action = req.params.action;
	// const firebaseId = req.query.id || ' ';
	// try {
	// 	const userFirebaseData = (
	// 		await firestore()
	// 			.collection('Streamers')
	// 			.doc(firebaseId as string)
	// 			.collection('twitch')
	// 			.doc('data')
	// 			.get()
	// 	).data();
	// 	const refreshData = await Api.fetch(
	// 		`https://api.disstreamchat.com/twitch/token/refresh?token=${userFirebaseData.refresh_token}&key=${process.env.DSC_API_KEY}`,
	// 	);
	// 	await Api.fetch(`https://api.twitch.tv/kraken/chat/twitchbot/${action}`, {
	// 		body: JSON.stringify({ msg_id: req.query.msg_id }),
	// 		method: 'POST',
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 			Accept: 'application/vnd.twitchtv.v5+json',
	// 			'Client-ID': process.env.TWITCH_CLIENT_ID,
	// 			Authorization: `OAuth ${refreshData?.access_token}`,
	// 		},
	// 	});
	// 	res.json({ message: 'success' });
	// } catch (err) {
	// 	next(err);
	// }
});

router.get('/customemotes', async (req, res) => {
	// const channelName = req.query.channel || req.query.name;
	// if (!channelName) return res.status(400).json({ message: 'missing channel name', code: 400 });
	// const [bttv, ffz] = await Promise.all([getBttvEmotes(channelName), getFfzEmotes(channelName)]);
	// res.json({ bttv, ffz });
});

router.get('/emotes', async (req, res) => {
	// const user = req.query.user;
	// if (!user) {
	// 	return res.status(400).json({ message: 'missing user', code: 400 });
	// }
	// const userInfo = {} as Object; //await Api.getUserInfo(user as string);
	// const id = userInfo.id;
	// const firebaseId = id;
	// const userDataRef = firestore().collection('Streamers').doc(firebaseId);
	// const userTwitchDataRef = userDataRef.collection('twitch').doc('data');
	// const userTwitchData = (await userTwitchDataRef.get()).data();
	// const refreshToken = userTwitchData?.refresh_token;
	// const response = (await fetch(
	// 	`https://api.disstreamchat.com/twitch/token/refresh?token=${refreshToken}&key=${process.env.DSC_API_KEY}`,
	// )) as any;
	// const scopes = response.scope;
	// if (!scopes || !scopes.includes('user_subscriptions')) {
	// 	return res.status(401).json({ message: 'missing scopes', code: 401 });
	// }
	// const apiUrl = `https://api.twitch.tv/kraken/users/${id}/emotes`;
	// // const userApi = new TwitchApi({
	// // 	clientId: process.env.TWITCH_CLIENT_ID,
	// // 	authorizationKey: response.access_token,
	// // 	kraken: true,
	// // });
	// const emotes = {};
	// // await userApi.fetch(apiUrl, {
	// // 	headers: {
	// // 		Accept: 'application/vnd.twitchtv.v5+json',
	// // 		Authorization: `OAuth ${response.access_token}`,
	// // 	},
	// // });
	// res.json(emotes);
});

router.get('/channel/:channel', async (req, res, next) => {
	// const { channel } = req.params;
	// if (!channel) {
	// 	return res.status(400).json({ message: 'missing channel name', code: 400 });
	// }
	// const userData = {}; //await Api.getUserInfo(channel as string);
	// res.json(userData);
});

router.get('/channel/:channel/stats', async (req, res, next) => {
	// try {
	// 	const { channel: streamerName } = req.params;
	// 	const apiUrl = `https://api.twitch.tv/helix/streams?user_login=${streamerName}`;
	// 	const chattersUrl = `https://api.disstreamchat.com/chatters/?user=${streamerName}`;
	// 	const streamDataResponse = await Api.fetch(apiUrl);
	// 	const response = (await fetch(chattersUrl)) as any;
	// 	const streamData = streamDataResponse.data;
	// 	const stream = streamData[0];
	// 	if (stream) {
	// 		stream.all_viewers = stream.viewer_count;
	// 		stream.isLive = true;
	// 		return res.json(stream);
	// 	}
	// 	return res.json({
	// 		viewer_count: response.chatter_count,
	// 		isLive: false,
	// 	});
	// } catch (err) {
	// 	res.json(null);
	// }
});

// router.get('/checkmod', async (req, res) => {
// 	let channelName = req.query.channel as string;

// 	if (!channelName) {
// 		return res.status(400).json({ message: 'missing channel name', code: 400 });
// 	}
// 	if (!channelName.startsWith('#')) {
// 		channelName = '#' + channelName;
// 	}

// 	const { user } = req.query as Object<string>;
// 	try {
// 		const inChannels = twitchClient.channels;
// 		const alreadyJoined = inChannels.includes(channelName);

// 		if (!alreadyJoined) {
// 			const userData = await Api.getUserInfo(channelName.substring(1));
// 			if (userData) {
// 				twitchClient.join(channelName);
// 			} else {
// 				return res
// 					.status(400)
// 					.json({ message: "invalid channel name, it seems like that isn't a twitch channel", code: 400 });
// 			}
// 		}
// 		const results = await twitchClient.mods(channelName);

// 		const isMod = !!user && results.includes(user.toLowerCase());
// 		if (isMod) {
// 			return res.json(await Api.getUserInfo(channelName.substring(1)));
// 		} else {
// 			return res.json(null);
// 		}
// 	} catch (err) {
// 		try {
// 			log(`failed to join channel: ${channelName} because of ${err.message}`, { writeToConsole: true });
// 			let isMod = twitchClient.isMod(channelName, user);
// 			const chatters = await Api.fetch(`https://api.disstreamchat.com/chatters?user=${channelName.substring(1)}`);
// 			isMod = chatters?.moderators?.includes?.(user) || isMod;
// 			twitchClient.leave(channelName);
// 			if (isMod) {
// 				return res.json(await Api.getUserInfo(channelName.substring(1)));
// 			}
// 		} catch (err) {
// 			twitchClient.leave(channelName);
// 			return res.status(500).json(null);
// 		}
// 	}
// 	res.json(null);
// });

router.get('/profilepicture', async (req, res, next) => {
	// try {
	// 	const { user } = req.query as Object<string>;
	// 	const profilePicture = await getProfilePicture(Platform.TWITCH, user);
	// 	res.json(profilePicture);
	// } catch (err) {
	// 	next(err);
	// }
});

router.get('/token/refresh', validateRequest, async (req, res, next) => {
	// const { token } = req.query as Object<string>;
	// const json = await refreshTwitchToken(token);
	// res.json(json);
});

router.get('/token', async (req, res, next) => {
	// try {
	// 	const { code } = req.query;
	// eslint-disable-next-line max-len
	// 	const apiURL = `https://id.twitch.tv/oauth2/token?client_id=${process.env.TWITCH_APP_CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&code=${code}&grant_type=authorization_code&redirect_uri=${process.env.REDIRECT_URI}`;
	// 	const response = await fetch(apiURL, {
	// 		method: 'POST',
	// 	});
	// 	const validationResponse = await fetch('https://id.twitch.tv/oauth2/validate', {
	// 		headers: {
	// 			Authorization: `OAuth ${response.access_token}`,
	// 		},
	// 	});
	// 	if (!validationResponse.ok) {
	// 		res.status(validationResponse.status);
	// 		return res.json({
	// 			status: validationResponse.status,
	// 			message: validationResponse.message,
	// 		});
	// 	} else {
	// 		const { login, user_id } = validationResponse;
	// 		const ModChannels = await Api.getUserModerationChannels(login);
	// 		// automatically mod the bot in the users channel on sign in
	// 		// try {
	// 		// 	const userClient = new tmi.Client({
	// 		// 		options: { debug: false },
	// 		// 		connection: {
	// 		// 			secure: true,
	// 		// 			reconnect: true,
	// 		// 		},
	// 		// 		identity: {
	// 		// 			username: login,
	// 		// 			password: response.access_token,
	// 		// 		},
	// 		// 		channels: [login],
	// 		// 	});
	// 		// 	await userClient.connect();
	// 		// 	await userClient.say(login, "/mod disstreamchat");
	// 		// 	await userClient.disconnect();
	// 		// } catch (err) {}
	// 		const uid = user_id;
	// 		const token = await auth().createCustomToken(uid);
	// 		const userInfo = await Api.getUserInfo(login);
	// 		const displayName = userInfo.display_name;
	// 		const profilePicture = userInfo.profile_image_url;
	// 		try {
	// 			await firestore().collection('Streamers').doc(uid).update({
	// 				displayName,
	// 				profilePicture,
	// 				TwitchName: displayName.toLowerCase(),
	// 				name: displayName.toLowerCase(),
	// 				twitchId: user_id,
	// 			});
	// 		} catch (err) {
	// 			// await firestore().collection('Streamers').doc(uid).set();
	// 		}
	// 		await firestore().collection('Streamers').doc(uid).collection('twitch').doc('data').set({
	// 			user_id,
	// 			refresh_token: response.refresh_token,
	// 		});
	// 		// setup the follow webhook if there isn't already one
	// 		const hasConnection = !(
	// 			await firestore().collection('webhookConnections').where('channelId', '==', user_id).get()
	// 		).empty;
	// 		if (!hasConnection) {
	// 			subscribeToFollowers(user_id, sevenDays);
	// 			firestore().collection('webhookConnections').doc(uid).set({
	// 				channelId: user_id,
	// 			});
	// 		}
	// 		res.json({
	// 			token,
	// 			displayName: userInfo.display_name,
	// 			profilePicture: userInfo.profile_image_url,
	// 			ModChannels,
	// 			refresh_token: response.refresh_token,
	// 		});
	// 	}
	// } catch (err) {
	// 	next(err);
	// }
});

export default router;
