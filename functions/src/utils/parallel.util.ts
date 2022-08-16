import { logger } from 'firebase-functions';

/**
 * Assists in performing safe (all tasks execute) parallel operations.
 * Promise.all will reject as soon as any rejects. So we wrap all tasks
 * so that none reject and then throw at the end if any failed.
 */
export class Parallel {
	public static async forEach<T>(items: T[], task: (item: T, index: number) => Promise<void>): Promise<void> {
		await this.map(items, task);
	}

	public static async map<Ti, To>(items: Ti[], task: (item: Ti, index: number) => Promise<To>): Promise<To[]> {
		const errors = [];
		const tasks = items.map(async (item, index: number) => {
			try {
				return await task(item, index);
			} catch (e) {
				logger.error(e);
				errors.push(e);
			}
			return null;
		});

		const results = await Promise.all(tasks);

		if (errors.length > 0) {
			const successes = results.length - errors.length;
			const failures = errors.length;
			throw new ParallelError(successes, failures);
		}
		return results as To[];
	}
}

export class ParallelError extends Error {
	constructor(private _successes: number, private _failures: number) {
		super(`All tasks did not complete successfully. Successes (${_successes}), Failures (${_failures}).`);
	}

	get successes() {
		return this._successes;
	}

	get failures() {
		return this._failures;
	}
}
