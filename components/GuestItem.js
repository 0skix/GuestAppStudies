import React from "react";
import styled from "styled-components";
import Card from "./Card";

const GuestItem = (props) => {
	return (
		<Wrapper>
			<Card className="guest-item">
				<div className="guest-item__description">
					<h2 className="guest-item-h2">{props.imie}</h2>
					<h2 className="guest-item-h2">{props.nazwisko}</h2>
					<button className="button-4">Usuń Gościa</button>
				</div>
			</Card>
		</Wrapper>
	);
};

export default GuestItem;

const Wrapper = styled.div`
	.guest-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.5rem;
		margin: 1rem 0;
		background-color: #4b4b4b;
	}
	.guest-item__description {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		align-items: flex-end;
		flex-flow: column-reverse;
		justify-content: flex-start;
		flex: 1;
	}

	.button-4 {
		appearance: none;
		background-color: #fafbfc;
		border: 1px solid rgba(27, 31, 35, 0.15);
		border-radius: 6px;
		box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0,
			rgba(255, 255, 255, 0.25) 0 1px 0 inset;
		box-sizing: border-box;
		color: #24292e;
		cursor: pointer;
		display: inline-block;
		font-family: -apple-system, system-ui, "Segoe UI", Helvetica, Arial,
			sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
		font-size: 14px;
		font-weight: 500;
		line-height: 20px;
		list-style: none;
		padding: 6px 16px;
		position: relative;
		transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
		user-select: none;
		-webkit-user-select: none;
		touch-action: manipulation;
		vertical-align: middle;
		white-space: nowrap;
		word-wrap: break-word;
	}

	.button-4:hover {
		background-color: #f3f4f6;
		text-decoration: none;
		transition-duration: 0.1s;
	}

	.button-4:disabled {
		background-color: #fafbfc;
		border-color: rgba(27, 31, 35, 0.15);
		color: #959da5;
		cursor: default;
	}

	.button-4:active {
		background-color: #edeff2;
		box-shadow: rgba(225, 228, 232, 0.2) 0 1px 0 inset;
		transition: none 0s;
	}

	.button-4:focus {
		outline: 1px transparent;
	}

	.button-4:before {
		display: none;
	}

	.button-4:-webkit-details-marker {
		display: none;
	}

	.guest-item-h2 {
		color: #3a3a3a;
		font-size: 1rem;
		flex: 1;
		margin: 0 1rem;
		color: white;
	}
	.guest-item__price {
		font-size: 1rem;
		font-weight: bold;
		color: white;
		background-color: #40005d;
		border: 1px solid white;
		padding: 0.5rem;
		border-radius: 12px;
	}
	@media (min-width: 580px) {
		.guest-item__description {
			flex-direction: row;
			align-items: center;
			justify-content: flex-start;
			flex: 1;
		}
		.guest-item__description h2 {
			font-size: 1.25rem;
		}
		.guest-item__price {
			font-size: 1.25rem;
			padding: 0.5rem 1.5rem;
		}
	}
`;
