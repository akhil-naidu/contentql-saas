import { create } from 'zustand';
import { Doc, Id } from '@/convex/_generated/dataModel';

const initialValues = {
  name: '',
  description: '',
};

type ProductsType = typeof initialValues & {
  setName: (name: string) => void;
  setDescription: (description: string) => void;
};

export const useProductsStore = create<ProductsType>()((set) => ({
  ...initialValues,
  setName: (name) => set(() => ({ name: name })),
  setDescription: (description) => set(() => ({ description: description })),
}));
