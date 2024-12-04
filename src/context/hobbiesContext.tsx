"use client";

import { createContext, useContext, useState, useEffect } from "react";
import {
  collection,
  onSnapshot,
  doc,
  query,
} from "firebase/firestore";
import { db } from "@/app/db/configFirebase";
import { HobbieFormData, HobbieDbContextType } from "@/types/types";

const HobbieContext = createContext<HobbieDbContextType | null>(null);

export const useFirebaseHobbies = () => {
  const context = useContext(HobbieContext);
  if (!context) {
    throw new Error("Une erreur a eu lieu dans le context");
  }
  return context;
};

export const HobbieProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [hobbies, setHobbies] = useState<HobbieFormData[]>([]);

  useEffect(() => {
    const q = query(collection(db, "hobbies"));
    const unsuscribe = onSnapshot(q, (snapshot) => {
      const data: HobbieFormData[] = [];
      snapshot.forEach((doc) => {
        data.push({
          id: doc.id,
          ...doc.data(),
        } as HobbieFormData);
      });
      setHobbies(data);
    });

    return () => unsuscribe();
  }, []);

  const value = {
    hobbies,
  };

  return <HobbieContext.Provider value={value}>{children}</HobbieContext.Provider>;
};