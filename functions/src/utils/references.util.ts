// import { CollectionReference, DocumentReference } from '@google-cloud/firestore';

// import { ConnectionManager } from './connection-manager.util';

// export class FsCollectionRef {
// 	static get recipeSites(): Promise<CollectionReference<RecipePageConfig>> {
// 		return collection<RecipePageConfig>(Collections.RECIPE_SITES);
// 	}
// 	static get settings(): Promise<CollectionReference<Settings>> {
// 		return collection<Settings>(Collections.SETTINGS);
// 	}
// 	static get recipes(): Promise<CollectionReference<Recipe>> {
// 		return collection<Recipe>(Collections.RECIPES);
// 	}
// 	static get contentCreators(): Promise<CollectionReference<ContentCreator>> {
// 		return collection<ContentCreator>(Collections.CONTENT_CREATORS);
// 	}
// 	static get users(): Promise<CollectionReference<User>> {
// 		return collection<User>(Collections.USERS);
// 	}
// 	static get emails(): Promise<CollectionReference<Email>> {
// 		return collection<Email>(Collections.EMAILS);
// 	}
// }

// export class FsDocumentRef {
// 	static get recipeSite(): (docId: string) => Promise<DocumentReference<RecipePageConfig>> {
// 		return doc<RecipePageConfig>(FsCollectionRef.recipeSites);
// 	}

// 	static get settings(): Promise<DocumentReference<Settings>> {
// 		return doc<Settings>(FsCollectionRef.settings)('settings');
// 	}

// 	static get stripeSettings(): Promise<DocumentReference<Settings>> {
// 		return doc<Settings>(FsCollectionRef.settings)('stripe');
// 	}

// 	static get recipe(): (docId: string) => Promise<DocumentReference<Recipe>> {
// 		return doc<Recipe>(FsCollectionRef.recipes);
// 	}

// 	static get contentCreator(): (docId: string) => Promise<DocumentReference<ContentCreator>> {
// 		return doc<ContentCreator>(FsCollectionRef.contentCreators);
// 	}

// 	static get user(): (docId: string) => Promise<DocumentReference<User>> {
// 		return doc<User>(FsCollectionRef.users);
// 	}
// }

// // generates the reference for collections
// async function collection<T>(path: Collections): Promise<CollectionReference<T>> {
// 	return ConnectionManager.firestore.collection(path) as CollectionReference<T>;
// }

// // generates the function to generate the reference for a document in a collection
// function doc<T>(collectionRef: Promise<CollectionReference<T>>): (docId: string) => Promise<DocumentReference<T>> {
// 	return async (docId: string) => (await collectionRef).doc(docId);
// }
