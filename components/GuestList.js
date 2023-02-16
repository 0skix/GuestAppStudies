import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Context } from "../contexts/Context";
import Card from "./Card";
import GuestItem from "./GuestItem";

const GuestList = (props) => {
	const { data } = useContext(Context);
	if (data.length === 0) {
		return (
			<Wrapper>
				<h2 className="expenses-list__fallback">Found no expenses</h2>
			</Wrapper>
		);
	}

	return (
		<Wrapper>
			<Card className="list">
				{data &&
					data.map((guest) => {
						return (
							<GuestItem
								key={guest.sys.id}
								id={guest.sys.id}
								imie={guest.fields.name}
								nazwisko={guest.fields.surname}
							/>
						);
					})}
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
