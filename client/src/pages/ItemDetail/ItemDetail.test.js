import React from 'react';
import { render, screen, waitForElement } from '@testing-library/react';
import { act } from 'react-dom/test-utils'
import AppProviders from "context/AppProviders";
import axiosMock from 'axios'

import ItemDetail from './ItemDetail'


const match = {
    params: { 
        id: '5f2e9e14b8daf121c0c2cee2' 
    }
}

beforeAll(() => {
    window.scrollTo = jest.fn();

    axiosMock.get.mockResolvedValue({data: {
        item: {
            color: "Brown.",
            createdAt: "2020-08-08T12:44:04.699Z",
            description: "Stylish leopard pattern sweatshirt for women.",
            imageUrl: "images/limited/leo-sweatshirt.webp", 
            imageUrl2: "images/limited/leo-sweatshirt2.webp",
            material: "100% Cotton.",
            name: "LEOPARD SWEATSHIRT - BROWN",
            price: "74.95€",
            sizefit: "Regular fit.",
            updatedAt: "2020-08-08T12:44:04.699Z",
            __v: 0,
            _id: "5f2e9e14b8daf121c0c2cee2",
        }
    }})
})

test('ItemDetail component renders without crash', async () => {
    await act(async () => {
    render(<ItemDetail match={match} />, {wrapper: AppProviders})
    })
    expect(screen.getByText(/add to cart/i)).toBeInTheDocument()
}) 

test('ItemDetail fetches and consumes data properly', async () => {
    render(<ItemDetail match={match} />, {wrapper: AppProviders})
    await waitForElement(() => screen.getByText(/leopard sweatshirt - brown/i))
    expect(screen.getByText(/leopard sweatshirt - brown/i)).toBeInTheDocument()
})

 