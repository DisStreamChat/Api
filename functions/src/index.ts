import * as admin from 'firebase-admin';
import { https } from 'firebase-functions/v1';

import { app } from './api/api';

admin.initializeApp();

export const api = https.onRequest(app);
