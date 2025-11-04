import { db } from "@/lib/firebase";

import {
  doc,
  setDoc,
  collection,
  where,
  getDocs,
  query,
} from "firebase/firestore";

export const createUserDocument = async (userData) => {
  try {
    const usersRef = collection(db, "users");
    const emailQuery = query(usersRef, where("email", "==", userData.email));
    const querySnapshot = await getDocs(emailQuery);

    if (!querySnapshot.empty) {
      return;
    }
    const docRef = doc(usersRef);
    await setDoc(docRef, {
      ...userData,
      createdAt: new Date(),
    });

    return docRef.id;
  } catch (error) {
    console.error("Error creating user document:", error);
    throw error;
  }
};

export const getUserDocument = async (email) => {
  try {
    const userRef = query(collection(db, "users"), where("email", "==", email));
    const querySnapshot = await getDocs(userRef);
    if (querySnapshot.empty) {
      return null;
    }
    const userDoc = querySnapshot.docs[0];
    return { id: userDoc.id, ...userDoc.data() };
  } catch (error) {
    console.error("Error fetching user document:", error);
    throw error;
  }
};
