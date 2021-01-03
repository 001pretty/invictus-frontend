import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils'
import axiosMock from 'axios'

import MainCheckout from './MainCheckout'

import AppProviders from 'context/AppProviders'

beforeAll(() => {
  axiosMock.post.mockResolvedValue({data: {
  foundCartItems: [ {
    "_id": "5f2d450730634e409c406071",
    "imageUrl": "images/men/breeze-shorts.webp",
    "imageUrl2": "images/men/breeze-shorts2.webp",
    "name": "BREEZE SHORTS - LIGHT GREEN",
    "price": "39.95€",
    "description": "Light green shorts.",
    "color": "Light green.",
    "material": "100% Nylon.",
    "sizefit": " Regular fit.",
    "createdAt": "2020-08-07T12:11:51.178Z",
    "updatedAt": "2020-08-07T12:11:51.178Z",
    "__v": 0,
    "q": {
        "5f2f2ad60612e32c746ad1be": 1,
        "5f2e9cc4b8daf121c0c2cee0": 1,
        "5f2d450730634e409c406071": 1,
        "5f2e977b89beb43df07b69eb": 1
    }
},
{
    "_id": "5f2e977b89beb43df07b69eb",
    "imageUrl": "images/women/pikachu-shirt-white.webp",
    "imageUrl2": "images/women/pikachu-shirt-white2.webp",
    "name": "PIKACHU SHIRT - WHITE",
    "price": "34.95€",
    "description": "Invictus x Pokemon collaboration.",
    "color": "White.",
    "material": "100% Cotton.",
    "sizefit": "Regular fit.",
    "createdAt": "2020-08-08T12:15:55.872Z",
    "updatedAt": "2020-08-08T12:15:55.872Z",
    "__v": 0,
    "q": {
        "5f2f2ad60612e32c746ad1be": 1,
        "5f2e9cc4b8daf121c0c2cee0": 1,
        "5f2d450730634e409c406071": 1,
        "5f2e977b89beb43df07b69eb": 1
    }
},]
}})
})
 
  test('checkout renders without crash', async () => {
    const mockOnSubmit = jest.fn(data => data)
    const handleSubmit = jest.fn(data => data)

    await act( async () => {
      await render(<MainCheckout onSubmit={handleSubmit(mockOnSubmit)}/>, {wrapper: AppProviders})
    })

    expect(screen.getByText(/shipping address:/i)).toBeInTheDocument()
  })

  test('checkout calls the onSubmit function', async () => {
    const mockOnSubmit = jest.fn(data => data)
    const handleSubmit = jest.fn(data => data)
    render(<MainCheckout onSubmit={handleSubmit(mockOnSubmit)}/>, {wrapper: AppProviders})

    await act(async () => {
      userEvent.type(screen.getByRole('textbox', { name: /firstname/i }), 'Ducky')
      userEvent.type(screen.getByRole('textbox', { name: /lastname/i }), 'Duck')
      userEvent.type(screen.getByRole('textbox', { name: /address/i }), 'Duck Street 0000')
      userEvent.type(screen.getByRole('spinbutton', { name: /postalcode/i }), '00000')
      userEvent.type(screen.getByRole('textbox', { name: /city/i }), 'Duck City')
    })   

    await act(async () => { 
      userEvent.click(screen.getByRole('button', { name: /order now/i }))
    }) 

    expect(handleSubmit).toHaveBeenCalledTimes(1) 
  })     

  test("invalid lastname throws error", async () => {
    const mockOnSubmit = jest.fn(data => data)
    const handleSubmit = jest.fn(data => data)
    render(<MainCheckout onSubmit={handleSubmit(mockOnSubmit)}/>, {wrapper: AppProviders})

    await act(async () => {
      userEvent.type(screen.getByRole('textbox', { name: /firstname/i }), 'Ducky')
      userEvent.type(screen.getByRole('textbox', { name: /lastname/i }), '')
      userEvent.type(screen.getByRole('textbox', { name: /address/i }), 'Duck Street 0000')
      userEvent.type(screen.getByRole('spinbutton', { name: /postalcode/i }), '00000')
      userEvent.type(screen.getByRole('textbox', { name: /city/i }), 'Duck City')
    })   

    await act(async () => { 
      userEvent.click(screen.getByRole('button', { name: /order now/i }))
    }) 

    expect(handleSubmit).toHaveBeenCalledTimes(1) 
    expect(screen.getByText(/lastname is invalid/i)).toBeInTheDocument()
  })

  test("invalid address throws error", async () => {
    const mockOnSubmit = jest.fn(data => data)
    const handleSubmit = jest.fn(data => data)
    render(<MainCheckout onSubmit={handleSubmit(mockOnSubmit)}/>, {wrapper: AppProviders})

    await act(async () => {
      userEvent.type(screen.getByRole('textbox', { name: /firstname/i }), 'Ducky')
      userEvent.type(screen.getByRole('textbox', { name: /lastname/i }), 'Duck')
      userEvent.type(screen.getByRole('textbox', { name: /address/i }), '')
      userEvent.type(screen.getByRole('spinbutton', { name: /postalcode/i }), '00000')
      userEvent.type(screen.getByRole('textbox', { name: /city/i }), 'Duck City')
    })   

    await act(async () => { 
      userEvent.click(screen.getByRole('button', { name: /order now/i }))
    }) 

    expect(handleSubmit).toHaveBeenCalledTimes(1) 
    expect(screen.getByText(/address is invalid/i)).toBeInTheDocument()
  })

  test("invalid postal code throws error", async () => {
    const mockOnSubmit = jest.fn(data => data)
    const handleSubmit = jest.fn(data => data)
    render(<MainCheckout onSubmit={handleSubmit(mockOnSubmit)}/>, {wrapper: AppProviders})
    
    await act(async () => {
      userEvent.type(screen.getByRole('textbox', { name: /firstname/i }), 'Ducky')
      userEvent.type(screen.getByRole('textbox', { name: /lastname/i }), 'Duck')
      userEvent.type(screen.getByRole('textbox', { name: /address/i }), 'Duck Stret 0000')
      userEvent.type(screen.getByRole('spinbutton', { name: /postalcode/i }), '22')
      userEvent.type(screen.getByRole('textbox', { name: /city/i }), 'Duck City')
    })   

    await act(async () => { 
      userEvent.click(screen.getByRole('button', { name: /order now/i }))
    }) 

    expect(handleSubmit).toHaveBeenCalledTimes(1) 
    expect(screen.getByText(/postal code is invalid/i)).toBeInTheDocument()
  }) 