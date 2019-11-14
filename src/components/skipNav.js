import React from 'react';
import styled from 'styled-components';

const SkipNavCon = styled.div`
    width: 240px;
    margin: 15px auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SkipNavButton = styled.a`
    padding: 10px 20px;
    border-radius: 5px;
    background: #173449;
    color: rgb(242,242,242);
    font-weight: bold;
    font-family: Arial;
    border: 0;
    opacity: 0;
    text-decoration: none;
    :focus {
        opacity: 1;
    }
`;

const SkipNav = () => (
    <SkipNavCon>
        <SkipNavButton href="#main" alt="skip-nav">Skip Navigation</SkipNavButton>
    </SkipNavCon>
);

export default SkipNav;
