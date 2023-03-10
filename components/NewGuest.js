import React, { useState } from "react";
import styled from "styled-components";

import GuestForm from "./GuestForm";
const NewGuest = (props) => {
	const [clicked, setClicked] = useState(false);

	const stopEditingHandler = (props) => {
		setClicked(false);
	};
	return (
		<Wrapper>
			<div className="new-expense">
				{clicked === true ? (
					<>
						<GuestForm onCancel={stopEditingHandler} />
					</>
				) : (
					<button onClick={() => setClicked(true)}>Dodaj nowego gościa</button>
				)}
			</div>
		</Wrapper>
	);
};

export default NewGuest;

const Wrapper = styled.div`
	.new-expense {
		background-color: #a892ee;
		padding: 1rem;
		margin: 2rem auto;
		width: 50rem;
		max-width: 95%;
		border-radius: 12px;
		text-align: center;
		box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
	}
	.new-expense button {
		font: inherit;
		cursor: pointer;
		padding: 1rem 2rem;
		border: 1px solid #40005d;
		background-color: #40005d;
		color: white;
		border-radius: 12px;
		margin-right: 1rem;
	}
	.new-expense button:hover,
	.new-expense button:active {
		background-color: #510674;
		border-color: #510674;
	}
	.new-expense button.alternative {
		color: #220131;
		border-color: transparent;
		background-color: transparent;
	}
	.new-expense button.alternative:hover,
	.new-expense button.alternative:active {
		background-color: #ddb3f8;
	}
`;
