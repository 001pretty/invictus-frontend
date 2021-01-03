import React from 'react'
import { render, screen, waitForElement } from '@testing-library/react';
import { act } from 'react-dom/test-utils'
import axiosMock from 'axios'
import AppProviders from 'context/AppProviders'
 
import Men from './Men'

beforeAll(() => {
    axiosMock.get.mockResolvedValueOnce({data: { 
        "menItems": [
            {
                "_id": "5f285f0df44dc11ba03e0aa7",
                "imageUrl": "images/men/vest-yellow.webp",
                "imageUrl2": "images/men/vest-yellow2.webp",
                "name": "TACTICAL VEST - YELLOW",
                "price": "79.95€",
                "description": "Classic utility vest with detailed army pockets",
                "color": "Yellow.",
                "material": "100% Nylon",
                "sizefit": "Regular Fit",
                "createdAt": "2020-07-01T11:58:17.457Z",
                "updatedAt": "2020-07-01T11:58:17.457Z",
                "__v": 0
            },
            {
                "_id": "7d285f0df44dc11ba03e0aa7",
                "imageUrl": "images/men/joggers-yellow.webp",
                "imageUrl2": "images/men/joggers-yellow2.webp",
                "name": "TACTICAL JOGGERS - YELLOW",
                "price": "64.95€",
                "description": "Classic utility joggers",
                "color": "Yellow.",
                "material": "100% Nylon",
                "sizefit": "Regular Fit",
                "createdAt": "2020-07-11T11:58:17.457Z",
                "updatedAt": "2020-07-11T11:58:17.457Z",
                "__v": 0
            },
        ]
    }})
})


test('can click an item, see its description and add it to cart', async () => {
    await act( async () => {
        await render(<Men />, {wrapper: AppProviders})
    })
    expect(screen.getByRole('img', { name: /headerlogo/i })).toBeInTheDocument()
    expect(screen.getByText(/men all/i)).toBeInTheDocument()
    expect(screen.getByText(/newsletter/i)).toBeInTheDocument()
    waitForElement(() => {
        screen.getByText(/tactical vest - yellow/i) 
    })
    expect(screen.getByText(/tactical vest - yellow/i)).toBeInTheDocument()
    expect(screen.getByText(/tactical joggers - yellow/i)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /tactical vest \- yellow2/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /tactical joggers \- yellow2/i })).toBeInTheDocument()
})   
