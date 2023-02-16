import { createClient } from "contentful";
import { useContext, useEffect, useState } from "react";
import GuestList from "../components/GuestList";
import NewGuest from "../components/NewGuest";
import { Context } from "../contexts/Context";

export const client = createClient({
	space: process.env.CONTENTFUL_SPACE_ID,
	accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export default function Home(props) {
	const { setData } = useContext(Context);
	useEffect(() => {
		setData(props.guests);
	}, []);
	return (
		<>
			<NewGuest />
			<GuestList />
		</>
	);
}

export const getStaticProps = async () => {
	const res = await client.getEntries({
		content_type: process.env.CONTENTFUL_CONTENT_TYPE,
	});
	return {
		props: {
			guests: res.items,
		},
		revalidate: 1, // In seconds
	};
};
