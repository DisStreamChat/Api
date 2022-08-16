import { CallableContext, HttpsError } from 'firebase-functions/lib/providers/https';

export function callableHandler(
	fn: (data: any, ctx: CallableContext) => any | Promise<any>,
): (data: any, ctx: CallableContext) => Promise<{ data?: any; error?: HttpsError }> {
	return async (data: any, ctx: CallableContext) => {
		if (data?.ping) {
			return { data: 'pong' };
		}
		try {
			return { data: await fn(data, ctx) };
		} catch (e) {
			if (e instanceof HttpsError) {
				return { error: e };
			}
			throw e;
		}
	};
}
