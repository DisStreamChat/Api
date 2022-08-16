import { Platform } from '../models/platform.enum';

export const getProfilePicture = async (platform: Platform, username: string) => {
	let profilePicture;
	if (platform === Platform.TWITCH) {
		profilePicture = username; // (await TwitchApiClient.getUserInfo(username))["profile_image_url"];
	} else if (platform === Platform.DISCORD) {
		// const userObj = username; // await discordClient.users.fetch(username);
		profilePicture = username; // userObj.displayAvatarURL({ format: 'png' });
	}
	if (!profilePicture) {
		throw new Error('invalid profile picture or platform');
	}
	return profilePicture;
};
