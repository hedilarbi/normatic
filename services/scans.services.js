import { db } from "@/lib/firebase";

import {
  doc,
  setDoc,
  getDoc,
  collection,
  where,
  getDocs,
  query,
  orderBy,
  limit,
} from "firebase/firestore";

export const updateScanWithUserId = async (scanId, userId) => {
  try {
    console.log("Updating scan", scanId, "with user ID:", userId);
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

export const getUserLatestScans = async (userId) => {
  try {
    const userScansRef = collection(db, "scans");
    const q = query(
      userScansRef,
      where("userId", "==", userId),
      orderBy("createdAt", "desc"),
      limit(5)
    );
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return [];
    }

    const latestScans = querySnapshot.docs.map((doc) => doc.data());
    return latestScans;
  } catch (error) {
    console.error("Error fetching user's latest scan:", error);
    throw error;
  }
};
