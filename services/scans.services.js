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

export const getUserLatestScans = async (email) => {
  try {
    const userScansRef = collection(db, "scans");
    const q = query(
      userScansRef,
      where("email", "==", email),
      orderBy("createdAt", "desc"),
      limit(5)
    );
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      throw new Error("No scans found for user");
    }

    const latestScan = querySnapshot.docs[0].data();
    return latestScan;
  } catch (error) {
    console.error("Error fetching user's latest scan:", error);
    throw error;
  }
};
