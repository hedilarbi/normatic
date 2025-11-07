import { db } from "@/lib/firebase";

import {
  doc,
  setDoc,
  collection,
  where,
  getDocs,
  query,
} from "firebase/firestore";

export const createUserDocument = async (payload) => {
  try {
    const userRef = doc(collection(db, "users"));
    await setDoc(userRef, payload);
    return { id: userRef.id, ...payload };
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

export const updateUserDocument = async (userId, updates) => {
  try {
    const userRef = doc(db, "users", userId);
    await setDoc(userRef, updates, { merge: true });
  } catch (error) {
    console.error("Error updating user document:", error);
    throw error;
  }
};
