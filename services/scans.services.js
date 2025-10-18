import { db } from "@/lib/firebase";

import {
  doc,
  setDoc,
  getDoc,
  collection,
  where,
  getDocs,
  query,
} from "firebase/firestore";

export const updateScanWithUserId = async (scanId, userId) => {
  try {
    const scanRef = doc(db, "scans", scanId);
    const scanSnap = await getDoc(scanRef);

    if (!scanSnap.exists()) {
      throw new Error("Scan not found");
    }

    await setDoc(scanRef, { userId }, { merge: true });
  } catch (error) {
    console.error("Error updating scan with user ID:", error);
    throw error;
  }
};
