import express from 'express';
const router = express.Router();

router.get('/download', async (req, res) => {
	const { version } = req.query;
	if (version) {
		return res.redirect(
			`https://github.com/DisTwitchChat/App/releases/download/v${version}/disstreamchat-Setup-${version}.exe`,
		);
	}
	const apiURL = 'https://api.github.com/repos/disstreamchat/App/releases';
	const response = (await fetch(apiURL)) as any;
	res.redirect(response[0].assets[0].browser_download_url);
});

export default router;
