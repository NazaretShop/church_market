"use client";
import { TransitionStatus } from "react-transition-group";
import styled, { RuleSet, css, keyframes } from "styled-components";
import { ITransitionsProps } from "./types";

const unfoldIn = keyframes`
    0% {
      transform: scaleY(0.005) scaleX(0);
    }
    50% {
      transform: scaleY(0.005) scaleX(1);
    }
    100% {
      transform: scaleY(1) scaleX(1);
    }
  `;

const unfoldOut = keyframes`
    0% {
      transform: scaleY(1) scaleX(1);
    }
    50% {
      transform: scaleY(0.005) scaleX(1);
    }
    100% {
      transform: scaleY(0.005) scaleX(0);
    }
  `;

export const overlayAnimation: Record<TransitionStatus, RuleSet> = {
  entering: css`
    animation: ${unfoldIn} 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
  `,
  entered: css`
    animation: ${unfoldIn} 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
  `,
  exiting: css`
    animation: ${unfoldOut} 1s 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
  `,
  exited: css`
    animation: ${unfoldOut} 1s 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
  `,
  unmounted: css`
    animation: ${unfoldOut} 1s 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
  `,
};

export const contentAnimation: Record<TransitionStatus, RuleSet> = {
  entering: css`
    opacity: 1;
    transform: scale(1);
    transition: opacity 300ms, transform 300ms;
    transition-delay: 500ms;
  `,
  entered: css`
    opacity: 1;
    transform: scale(1);
    transition: opacity 300ms, transform 300ms;
  `,
  exiting: css`
    opacity: 0;
    transform: scale(0.1);
    transition: opacity 300ms, transform 300ms;
  `,
  exited: css`
    opacity: 0;
    transform: scale(0.1);
    transition: opacity 300ms, transform 300ms;
  `,
  unmounted: css`
    opacity: 0;
    transform: scale(0.1);
    transition: opacity 300ms, transform 300ms;
  `,
};

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 40px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1001;
  * {
    font-family: var(--font-roboto);
  }
`;

export const Overlay = styled.div<ITransitionsProps>`
  position: fixed;
  width: 100%;
  height: 100%;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  ${({ transitionState }) => overlayAnimation[transitionState]}
`;

export const Content = styled.div<ITransitionsProps>`
  height: fit-content;
  width: auto;
  z-index: 2;
  ${({ transitionState }) => contentAnimation[transitionState]}
`;
