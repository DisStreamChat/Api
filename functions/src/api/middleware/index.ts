import { firestore } from 'firebase-admin';
import { NextFunction, Request } from 'express';

export const allowedOrigins = ['https://www.disstreamchat.com', 'http://localhost:3200', 'http://localhost:3000'];

export const validateRequest = async (req: Request, res: any, next: NextFunction) => {
	try {
		const apiKey = req.query.key;
		if (apiKey === process.env.DSC_API_KEY) return next();
		const userId = req.query.id as string;
		if (!userId) {
			return res.status(401).json({ message: 'Missing or invalid credentials', code: 401 });
		}
		const otc = req.query.otc;
		const otcData = (await firestore().collection('Secret').doc(userId).get()).data();
		const otcFromDb = otcData?.value;
		if (otcFromDb === otc) {
			const newOtc = uuidv1();
			await firestore().collection('Secret').doc(userId).set({ value: newOtc });
			return next();
		}
		res.status(401).json({ message: 'Missing or invalid credentials', code: 401 });
	} catch (err: any) {
		res
			.status(500)
			// eslint-disable-next-line @typescript-eslint/restrict-plus-operands
			.json({ message: 'Internal Error: Make sure you provide valid credentials. ' + err.message, code: 500 });
	}
};
function uuidv1() {
	throw new Error('Function not implemented.');
}
