import { create } from "zustand";

interface State {
	token: string;
	setToken: (token: string) => void;
}

const stateStore = create<State>((set) => ({
	token: "",
	setToken: (token: string) => set(() => ({ token: token })),
}));

export default stateStore;
