import { createClient } from "contentful";
import { useContext, useEffect, useState } from "react";
import GuestList from "../components/GuestList";
import NewGuest from "../components/NewGuest";
import { Context } from "../contexts/Context";

export const client = createClient({
	space: "mg14tohen3xp",
	accessToken: "vVwQOa2YQs0yWeS79zCBsiZ1wega_Ks7s-YGUZUwEOQ",
});

export default function Home(props) {
	const { setData } = useContext(Context);
	useEffect(() => {
		setData(props.guests);
	}, []);
	return (
		<>
			<h1> </h1>
			<NewGuest />
			<GuestList />
		</>
	);
}

export const getStaticProps = async () => {
	const res = await client.getEntries({ content_type: "guestList" });
	return {
		props: {
			guests: res.items,
		},
	};
};
