import { ICategoryModel } from "@/common/types";

export const getCategories = async (): Promise<ICategoryModel[]> => {
  // const categoriesQuery = query(collection(firestore, "category"));

  // const categoriesSnapshot = await getDocs(categoriesQuery);
  // const categories = categoriesSnapshot.docs.map((entry) => ({
  //   id: entry.id,
  //   category: entry.data(),
  // }));
  return [];
};
