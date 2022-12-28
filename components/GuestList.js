import React from "react";
import styled from "styled-components";
import Card from "./Card";
import GuestItem from "./GuestItem";

const GuestList = (props) => {
	return (
		<Wrapper>
			<Card className="list">
				<GuestItem imie={"Oskar"} nazwisko={"sgiga"} />
				<GuestItem imie={"Giga"} nazwisko={"giga"} />
				<GuestItem imie={"Giga"} nazwisko={"giga"} />
				<GuestItem imie={"Giga"} nazwisko={"giga"} />
			</Card>
		</Wrapper>
	);
};

export default GuestList;

const Wrapper = styled.div`
	.list {
		padding: 1rem;
		background-color: rgb(31, 31, 31);
		margin: 2rem auto;
		width: 50rem;
		max-width: 95%;
	}
`;
