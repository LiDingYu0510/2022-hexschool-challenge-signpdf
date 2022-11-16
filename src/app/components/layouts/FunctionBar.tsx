import penIcon from '@assets/funcIcon/icon01.png'
import textIcon from '@assets/funcIcon/icon02.png'
import dateIcon from '@assets/funcIcon/icon03.png'
import checkIcon from '@assets/funcIcon/icon04.png'
import ImageWrapper from '@components/ImageWrapper'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-item: center;
`
const FuncIconRow = styled.div`
    width: 300px;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-item: center;
`

const IconContainer = styled.div`
    width: 30px;
    height: 30px;
`

const Line = styled.div`
    height: 30px;
    border-left: 1px solid black;
`

const BtnContainer = styled.div`
    width: 250px;
    display: flex;
    justify-content: space-around;
    align-item: center;
    margin-right: 100px;
`

export default function FunctionBar() {
    return (
        <Container>
            <FuncIconRow>
                <IconContainer>
                    <ImageWrapper imgUrl={penIcon} />
                </IconContainer>
                <Line />
                <IconContainer>
                    <ImageWrapper imgUrl={textIcon} />
                </IconContainer>
                <Line />
                <IconContainer>
                    <ImageWrapper imgUrl={dateIcon} />
                </IconContainer>
                <Line />
                <IconContainer>
                    <ImageWrapper imgUrl={checkIcon} />
                </IconContainer>
            </FuncIconRow>
            <BtnContainer>
                <button className='primary-btn' type='button'>
                    test
                </button>
                <button className='primary-btn' type='button'>
                    test
                </button>
            </BtnContainer>
        </Container>
    )
}