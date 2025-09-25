import {create} from "zustand";

type state = {
  userdata: object
}

type handler = {
  setUserData: (data: object) => void
}

const useFormStore = create<state & handler>((set) => ({
  userdata: {},

    setUserData: (data) =>
    set((state) => ({
      userdata: {
        ...state.userdata,
        ...data, // merge dengan data baru
      },
    })),
}))

export default useFormStore;