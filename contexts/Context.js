import React, { createContext, useState } from "react";
export const Context = createContext();
export const ContextProvider = ({ children }) => {
	const [data, setData] = useState("");
	const value = { data, setData };
	return <Context.Provider value={value}>{children}</Context.Provider>;
};
