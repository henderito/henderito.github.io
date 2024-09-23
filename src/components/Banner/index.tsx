'use client'

import React, { FC } from "react"
import styled from "styled-components"
import { IBannerColumnProps, IBannerContainerProps, IBannerDescriptionProps, IBannerGridProps, IBannerProps, IBannerTagsProps, IBannerTitleProps } from "./types"

const StyledTitle = styled.div`
    font-size: 42px;
    font-weight: 700;
    color: black;
    /* color: rgba(255, 255, 255, 0.8); */
  `;

const Title: FC<IBannerTitleProps> = ({ title }) => (
  <StyledTitle>{title}</StyledTitle>
);

const StyledTag = styled.div`
    padding: 0.5rem 0;
  
    & span {
      margin-right: 0.5rem;
      font-size: 0.9rem;
      font-weight: 500;
      /* color: rgba(255, 255, 255, 0.6); */
      color: black;
    }
  `;

const Tags: FC<IBannerTagsProps> = ({ tags }) => {
  return (
    <StyledTag>
      {tags.map((tag, index) => (
        <span key={`tag-${tag}`}>{tag} {index + 1 !== tags.length && "-"}</span>
      ))}
    </StyledTag>
  );
};

const StyledDescription = styled.div`
    text-align: start;
    /* color: rgba(255, 255, 255, 0.8); */
    color: black;
    display: -webkit-box;
    /* max-width: 50%; */
    -webkit-line-clamp: 4;
    font-size: 1rem;
    -webkit-box-orient: vertical;
    /* overflow: hidden; */
  `;

const Description: FC<IBannerDescriptionProps> = ({ description, tags }) => (
  <div>
    <Tags tags={tags} />
    <StyledDescription>{description}</StyledDescription>
  </div>
);

const StyledColumn: FC<IBannerColumnProps> = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: ${props => props.columnDirection};
  `

const Column: FC<IBannerColumnProps> = ({ columnDirection, children }) => {
  return (
    <StyledColumn columnDirection={columnDirection}>
      {children}
    </StyledColumn>
  )
}

const Container: FC<IBannerContainerProps> = styled.div`
    height: 100%;
    /* width: 100%; */
    padding: 6rem 3rem;
    display: flex;
    background-image: url(${(props: Pick<IBannerProps, "image">) => props.image});
    background-color: #DACFD5;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: right;
  `;

const Grid: FC<IBannerGridProps> = styled.section`
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: ${props => `repeat(${props.columns}, 1fr)`};
    padding-left: 10px;
  `;

const Banner = (props: IBannerProps) => {
  return (
    <Container image={props.image}>
      <Grid columns={props.columns}>{props.children}</Grid>
    </Container>
  );
};

Banner.Title = Title;
Banner.Column = Column;
Banner.Description = Description;

export default Banner;