import React from "react";
import styled from "styled-components";
const Card = (props) => {
	const classes = props.className;
	return <Wrapper className={classes}>{props.children}</Wrapper>;
};

export default Card;

const Wrapper = styled.div`
	border-radius: 12px;
	box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
`;
