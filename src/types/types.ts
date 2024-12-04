export interface HobbieFormData {
    id: string;
    createdAt: { seconds: number; nanoseconds: number };
    category: string;
    title: string;
    resum: string;
    pictures: string[];
  }
  
  export interface HobbieDbContextType {
    hobbies: HobbieFormData[];
  }
  
  export interface HobbiePageProps {
    params: HobbieFormData;
  }