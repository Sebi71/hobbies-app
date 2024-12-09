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
    params: HobbieFormData[];
  }

  export interface FilterProps {
    handleFilter: (category: string) => void;
    categories: string[];
  }

  export interface CategoriesProps {
    params: {
      category: string;
    }
  }

export interface PicturesProjectProps {
    pictures: string[];
    title: string;
}