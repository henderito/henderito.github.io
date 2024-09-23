import React, { FC } from 'react'
import styled from 'styled-components'
import { IBreadcrumbsProps } from './types';

export const Breadcrumbs: FC<IBreadcrumbsProps> = ({ children }) => {
    return (
      <nav aria-label="Breadcrumb">
        <BreadcrumbList>{children}</BreadcrumbList>
      </nav>
    );
  };
  
const BreadcrumbList = styled.ol`
    padding: 0;
    margin: 0;
    list-style-type: none;
`;