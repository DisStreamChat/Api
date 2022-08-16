import { formatDistanceToNow } from 'date-fns';
import { readdirSync, statSync } from 'fs';
import { join } from 'path';

import { Object } from '../models/shared.model';

export const walkSync = (files: any, fileDir: any, fileList: { name: any; path: string }[] = []) => {
	for (const file of files) {
		const absolutePath = join(fileDir, file);
		if (statSync(absolutePath).isDirectory()) {
			const dir = readdirSync(absolutePath);
			walkSync(dir, absolutePath, fileList);
		} else {
			fileList.push({ name: file, path: absolutePath });
		}
	}
	return fileList;
};

export const cleanRegex = function (str: string): string {
	return str.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
};

export const random = <T>(min: number | T[], max?: number): any => {
	if (Array.isArray(min)) {
		return min[Math.floor(min.length * Math.random())];
	}
	if (!max && min) {
		return random(0, min);
	}
	return Math.random() * (max! - min) + min;
};

export const hoursToMillis = (hrs: number) => hrs * 3600000;

export const isNumeric = (value: any): value is number => {
	return /^-?\d+[.\,]?\d*$/.test(value);
};

export const convertDiscordRoleColor = (color: string): string => (color === '#000000' ? '#FFFFFF' : color);

export const formatFromNow = (time: Date) => formatDistanceToNow(time, { addSuffix: true });

export const isObject = (val: any): boolean => typeof val === 'object' && !!val;

export function compare(obj1: Object = {}, obj2: Object = {}, deep?: boolean) {
	const output: Object = {};
	const merged = { ...obj1, ...obj2 };

	for (const key in merged) {
		const value1 = obj1[key],
			value2 = obj2[key];

		if ((isObject(value1) || isObject(value2)) && deep) output[key] = compare(value1, value2);
		else output[key] = value1 === value2;
	}

	return output;
}
