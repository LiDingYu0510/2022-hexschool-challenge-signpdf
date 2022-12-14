import CanvasContext from '@base/app/contexts/CanvasContext'
import { useAppSelector } from '@base/app/hooks'
import { mockPdf } from '@base/utils/mock/pdfData'
import { MainCanvas, SetMainCanvas } from '@base/utils/types'
import { fabric } from 'fabric'
import React, { ReactNode } from 'react'
import styled from 'styled-components'

import useCanvasSize from './hooks/useCanvasSize'
import useRenderPdf from './hooks/useRenderPdf'

const Container = styled.div`
    width: 100%;
    height: 88vh;
    background-color: grey;
    overflow: scroll;
    display: flex;
    justify-content: center;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 10px;
`

const PdfPageBtnContainer = styled.div`
    position: absolute;
    bottom: 1%;
    width: 200px;
    height: 40px;
    background-color: rgba(183, 183, 183, 0.24);
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 5;
`
const pageBtnStyles = {
    backgroundColor: '#6C6C6C',
    borderRadius: '50%',
    border: 'none',
    height: '30px',
    width: '30px',
    color: 'white',
}

export default function PreviewArea({ children }: { children: ReactNode }) {
    const [prev, next, currentPage, totalPage] = useRenderPdf()

    // const testDownload = () => {
    //     const dataURL = mainCanvas!.toDataURL()
    //     const link = document.createElement('a')
    //     link.download = 'my-image.png'
    //     link.href = dataURL
    //     link.target = '_blank'
    //     document.body.appendChild(link)
    //     link.click()
    //     link.parentNode!.removeChild(link)
    // }

    return (
        <Container>
            {children}
            <PdfPageBtnContainer>
                <div>
                    <button
                        type='button'
                        onClick={prev as (e: React.MouseEvent<HTMLButtonElement>) => void}
                        style={pageBtnStyles}
                    >
                        {'<'}
                    </button>
                </div>

                <div>
                    {currentPage as number} / {totalPage as number}
                </div>
                <div>
                    <button
                        type='button'
                        onClick={next as (e: React.MouseEvent<HTMLButtonElement>) => void}
                        style={pageBtnStyles}
                    >
                        {'>'}
                    </button>
                </div>
            </PdfPageBtnContainer>
        </Container>
    )
}
