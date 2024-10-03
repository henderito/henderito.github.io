'use client'

import React, { FC } from "react"
import styled from "styled-components"
import { ITagsProps } from "./types";

const StyledTag = styled.div`
    padding: 0.5rem 0;

    & span {
    margin-right: 0.5rem;
    /* font-size: 1rem; */
    font-weight: 500;
    color: rgba(255, 255, 255, 0.6);
    }
`;

export const Tags: FC<ITagsProps> = ({ tags }) => {
    return (
        <StyledTag>
          {tags.map((tag: string, index: number) => (
            <span key={`tag-${tag}-${index}`}>{tag}</span>
          ))}
        </StyledTag>
      );
}