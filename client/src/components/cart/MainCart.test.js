import React from 'react';
import { render, screen, waitForElement} from '@testing-library/react';
import axiosMock from 'axios'
import { act } from 'react-dom/test-utils'

import MainCart from './MainCart'
import AppProviders from 'context/AppProviders'

beforeAll(() => {
  axiosMock.post.mockResolvedValue({data: { 
    foundCartItems: [{
      color: "Brown.",
      createdAt: "2020-08-08T12:44:04.699Z",
      description: "Stylish leopard pattern sweatshirt for women.",
      imageUrl: "images/limited/leo-sweatshirt.webp",
      imageUrl2: "images/limited/leo-sweatshirt2.webp",
      material: "100% Cotton.",
      name: "LEOPARD SWEATSHIRT - BROWN",
      price: "74.95€",
      q: {'5f2e9e14b8daf121c0c2cee2': 1, '5f2e9e61b8daf121c0c2cee3': 3},
      sizefit: "Regular fit.",
      updatedAt: "2020-08-08T12:44:04.699Z",
      __v: 0,
      _id: "5f2e9e14b8daf121c0c2cee2",
    }, 
    {
      color: "Brown.",
      createdAt: "2020-08-08T12:45:21.643Z",
      description: "Stylish leopard pattern leggins for women.", 
      imageUrl: "images/limited/leo-leggins.webp",
      imageUrl2: "images/limited/leo-leggins2.webp",
      material: "100% Cotton.",
      name: "LEOPARD LEGGINS - BROWN",
      price: "54.95€",
      q: {'5f2e9e14b8daf121c0c2cee2': 1, '5f2e9e61b8daf121c0c2cee3': 3},
      sizefit: "Regular fit.",
      updatedAt: "2020-08-08T12:45:21.643Z",
      __v: 0,
      _id: "5f2e9e61b8daf121c0c2cee3",
  
    }]
  }
  })
})

test('renders checkout component', async () => {
  await act( async () => { 
    render(<MainCart />, {wrapper: AppProviders}) 
  })
  expect(screen.getByText(/product/i)).toBeInTheDocument()
})    

test('fetches and displays cart items properly', async () => { 
  render(<MainCart />, {wrapper: AppProviders}) 
  await waitForElement(() => screen.getByText(/leopard sweatshirt - brown/i))
  expect(screen.getByText(/leopard sweatshirt - brown/i)).toBeInTheDocument() 
  expect(screen.getByText(/leopard leggins - brown/i)).toBeInTheDocument()  
})

test('cart displays proper quantity', async () => { 
  render(<MainCart />, {wrapper: AppProviders}) 
  await waitForElement(() => screen.getByText(/leopard sweatshirt - brown/i))
  expect(screen.getByText(/quantity: 3/i)).toBeInTheDocument()   
})

