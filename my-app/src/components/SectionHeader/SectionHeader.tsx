import React, { FC } from 'react'
import { StyledSectionHeaderWrapper } from './styledSectionHeader';

interface ISectionHeader {
  headerName: string;
  //imageSrc: string;
}
  
const SectionHeader: FC<ISectionHeader> = ({headerName}) => {
  return (
    <StyledSectionHeaderWrapper>
      <p>{headerName}</p>
    </StyledSectionHeaderWrapper>
  )
}

export default SectionHeader