import * as admin from 'firebase-admin';

import { Firestore } from '@google-cloud/firestore';
import { Auth } from 'firebase-admin/lib/auth/auth';

export class ConnectionManager {
	private static fsInstance: Firestore | undefined;
	private static authIstance: Auth | undefined;

	static get firestore(): Firestore {
		if (!this.fsInstance) {
			this.fsInstance = admin.firestore();
		}
		return this.fsInstance;
	}

	static get auth(): Auth {
		if (!this.authIstance) {
			this.authIstance = admin.auth();
		}
		return this.authIstance;
	}
}
