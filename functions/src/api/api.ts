import cors from 'cors';
import crypto from 'crypto';
import express from 'express';
import helmet from 'helmet';
import http from 'http';

import v2 from './routes/routes';

export const app = express();
export const server = new http.Server(app);

app.use(helmet());
app.use(cors());

// this function is used to verify twitch webhook requests
app.use(
	express.json({
		verify(req: any, res, buf, encoding) {
			// is there a hub to verify against
			// eslint-disable-next-line camelcase
			req.twitch_hub = false;
			if (req.headers && req.headers['x-hub-signature']) {
				// eslint-disable-next-line camelcase
				req.twitch_hub = true;

				var xHub = req.headers['x-hub-signature'].split('=');

				// eslint-disable-next-line camelcase
				req.twitch_hex = crypto.createHmac(xHub[0], process.env.WEBHOOK_SECRET!).update(buf).digest('hex');
				// eslint-disable-next-line camelcase
				req.twitch_signature = xHub[1];
			}
		},
	}),
);

app.use('/', v2);
