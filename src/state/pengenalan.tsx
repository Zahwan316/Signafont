import {create} from "zustand";

type state = {
  menu: string
}

type handler = {
  setMenu: (data: string) => void
}

const usePengenalanStore = create<state & handler>((set) => ({
  menu: "MAIN",

  setMenu:(data: string) => set(() => ({menu: data}))
}))

export default usePengenalanStore;