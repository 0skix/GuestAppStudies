import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { createClient } from "contentful-management";

async function createEntry(imie, nazwisko) {
	try {
		// Create the Contentful client
		const client = createClient({
			accessToken: process.env.CONTENTFUL_ACCESS_TOKEN_POST,
		});

		// Get the space
		const environment = await client
			.getSpace(process.env.CONTENTFUL_SPACE_ID)
			.then((space) =>
				space.getEnvironment(prcoess.env.CONTENTFUL_ENVIRONMENT)
			);

		// Create the entry
		const entry = await environment.createEntry(
			process.env.CONTENTFUL_CONTENT_TYPE,
			{
				fields: {
					name: {
						"en-US": imie,
					},
					surname: {
						"en-US": nazwisko,
					},
				},
			}
		);

		// Save the entry
		await entry.publish();
		window.location.reload();
		return entry;
	} catch (error) {
		console.error(error);
	}
}

const GuestForm = (props) => {
	const [enteredTitle, setEnteredTitle] = useState("");
	const [enteredAmount, setEnteredAmount] = useState("");

	const titleChangeHandler = (event) => {
		setEnteredTitle(event.target.value);
	};

	const amountChangeHandler = (event) => {
		setEnteredAmount(event.target.value);
	};

	const submitHandler = (event) => {
		event.preventDefault();
		createEntry(enteredTitle, enteredAmount);
	};

	return (
		<Wrapper>
			<form onSubmit={submitHandler}>
				<div className="new-expense__controls">
					<div className="new-expense__control">
						<label>Imię</label>
						<input
							type="text"
							value={enteredTitle}
							onChange={titleChangeHandler}
						/>
					</div>
					<div className="new-expense__control">
						<label>Nazwisko</label>
						<input
							type="text"
							value={enteredAmount}
							onChange={amountChangeHandler}
						/>
					</div>
				</div>
				<div className="new-expense__actions">
					<button type="button" onClick={props.onCancel}>
						Anuluj
					</button>
					<button type="submit">Dodaj Gościa</button>
				</div>
			</form>
		</Wrapper>
	);
};

export default GuestForm;

const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-bottom: 1rem;
	flex-direction: column;
	.new-expense__control label {
		font-weight: bold;
		margin-bottom: 0.5rem;
		display: block;
	}
	.new-expense__control input {
		font: inherit;
		padding: 0.5rem;
		border-radius: 6px;
		border: 1px solid #ccc;
		width: 20rem;
		max-width: 100%;
	}
	.new-expense__actions {
		text-align: right;
	}
`;
