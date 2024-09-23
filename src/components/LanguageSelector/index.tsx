'use client'

import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { ILanguageData, ILanguageOption, ILanguageSelectorProps } from "./types";
import { COLORS } from "@/global/theme";
import { useParams, useRouter, useSelectedLayoutSegments } from "next/navigation";

const Wrapper = styled.div<{ active: boolean; }>`
    text-align: left;
    width: fit-content;
    height: auto;
    color: #bfc5cd;
    font-size: 16px;
    font-weight: 300;
    position: fixed;
    left: 15px;
    top: 0;
    margin: 1em 0;
    transition: all .6s ease;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 400px) {
        max-width: 300px;
    }

    svg {
        fill: #798697;
    transition: all .6s ease;
    }

    ul {
        border: 2px solid ${COLORS.white};
        /* display: ${props => props.active ? 'flex' : 'none'}; */
        flex-direction: column;
        gap: 1rem;
        height: auto;
        align-items: center;
        justify-content: center;
        width: fit-content;
        padding: 0.5rem;
        border-radius: 8px;
        margin-top: 8px;
        box-shadow: 0px 0px 8px 1px rgba(0,0,0,0.1);
        background-color: rgba(211,211,211,0.4);
        transition: all .6s ease;
    }

    ${props => props.active ? `
        svg {
            transform: rotate(180deg);
        }
    ` : ``}
`;

const MenuLabel = styled.div`
    display: inline-block;
    color: grey;
    border: 1px solid green;
    /* background: transparent; */
    background-color: rgba(211,211,211,0.4);
    box-shadow: 0px 0px 8px 1px rgba(0,0,0,0.1);
    cursor: pointer;
    vertical-align: middle;
    max-width: 100px;
    padding: 10px 10px;
    font-size: 12px;
    text-align: center;
    height: 100%;
    transition: all .3s ease;
    border: 2px solid ${COLORS.white};
    border-radius: 50px;

    &:focus {
        outline: none;
    }
`;

const SelectedFlag: FC<{ image: string }> = styled.div`
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;
    height: 15px;
    width: 18px;
    transition: all .5s ease;
`

const ItemList = styled.div`
    color: #798697;
    background: transparent;
    gap: 1rem;
    display: flex;
    height: 100%;
    cursor: pointer;
    user-select: none;
    transition: all .25s ease;

    &:hover, &.selected { 
        background: #F7F7F7;
        color: #4A4A4A;
    }
`;

export const LanguageSelector: FC<ILanguageSelectorProps> = ({ options }) => {
  
  const router = useRouter();
  const params = useParams();
  const urlSegments = useSelectedLayoutSegments();
  
  const [isOpened, setIsOpened] = useState(false);
  const [selectedOption, setSelectedOption] = useState<ILanguageOption | null>(null);

  useEffect(() => {
    const selected = options.filter((val) => val.locale == (params.locale as string));
    setSelectedOption(selected[0]);
  })

  const handleSelectedItem = (obj: ILanguageData) => {
    setSelectedOption(obj);
    console.log(obj)
    setIsOpened(!isOpened)

    router.push(`/${obj.locale}/${urlSegments.join('/')}`);
  };

  const handleOpenMenu = (e: any) => {
    e.preventDefault()
    setIsOpened(!isOpened)
  }

  return (
    <Wrapper active={isOpened}>
      <MenuLabel onClick={handleOpenMenu}>
        <SelectedFlag image={selectedOption?.flagUrl} />
      </MenuLabel>
      <ul
        style={
          isOpened
            ? { display: "flex" }
            : {
              display: "none",
              listStyleType: "none"
            }
        }
      >
        {options?.map(el => (
          <ItemList
            key={el.flagDescription.toString()}
            onClick={() => handleSelectedItem(el)}
          >
            <SelectedFlag image={el.flagUrl} />
          </ItemList>
        ))}
      </ul>
    </Wrapper>
  );
}