import { logger } from 'firebase-functions/v1';

export function checkTime<T>(func: () => T, label: string): T {
	const startTime = new Date();
	const data = func();
	const endTime = new Date();
	const dif = Math.abs(startTime.getTime() - endTime.getTime())
	if(dif > 1) {
		logger.log(`The function ${label} took ${dif}ms to complete`);
	}
	return data;
}
