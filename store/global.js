import create from "zustand";

const useStore = create((set) => ({
  language: "",
  setLanguage: (language) => set({ language }),
}));

export default useStore;
