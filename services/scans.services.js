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

export const getUserTypedScans = async (userId, scanType) => {
  try {
    const userScansRef = collection(db, "scans");
    const q = query(
      userScansRef,
      where("userId", "==", userId),
      where("type", "==", scanType),
      orderBy("createdAt", "desc")
    );
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return [];
    }

    const typedScans = querySnapshot.docs.map((doc) => doc.data());
    return typedScans;
  } catch (error) {
    console.error("Error fetching user's typed scans:", error);
    throw error;
  }
};

export const getScanByUUID = async (scanUuid) => {
  try {
    const scansRef = collection(db, "scans");
    const q = query(scansRef, where("scanUuid", "==", scanUuid), limit(1));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return null;
    }

    const scanDoc = querySnapshot.docs[0];
    return { id: scanDoc.id, ...scanDoc.data() };
  } catch (error) {
    console.error("Error fetching scan by UUID:", error);
    throw error;
  }
};
