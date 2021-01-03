import React, { useState } from "react";
import MainSearch from './MainSearch'
import { render, screen, waitForElement, waitFor } from '@testing-library/react';
import 'expect-more-jest';
import 'jest-chain';

import { act } from 'react-dom/test-utils'
import axiosMock from 'axios'
import userEvent from "@testing-library/user-event";
import {BrowserRouter} from 'react-router-dom'


import AppProviders from "context/AppProviders";
import { AuthProvider } from "context/AuthContext";
import { SideDrawerProvider } from "context/SideDrawerContext";


const fakeData = {data: {
  foundItems: [{
      color: "Brown.",
      createdAt: "2020-08-08T12:44:04.699Z",
      description: "Stylish leopard pattern sweatshirt for women.",
      imageUrl: "images/limited/leo-sweatshirt.jpg", 
      imageUrl2: "images/limited/leo-sweatshirt2.jpg",
      material: "100% Cotton.",
      name: "LEOPARD SWEATSHIRT - BROWN",
      price: "74.95€",
      sizefit: "Regular fit.",
      updatedAt: "2020-08-08T12:44:04.699Z",
      __v: 0, 
      _id: "5f2e9e14b8daf121c0c2cee2",
  }, 
  {
    color: "Brown.",
    createdAt: "2020-08-08T12:45:21.643Z",
    description: "Stylish leopard pattern leggins for women.",
    imageUrl: "images/limited/leo-leggins.jpg",
    imageUrl2: "images/limited/leo-leggins2.jpg", 
    material: "100% Cotton.",
    name: "LEOPARD LEGGINS - BROWN",
    price: "54.95€",
    sizefit: "Regular fit.",
    updatedAt: "2020-08-08T12:45:21.643Z",
    __v: 0,
    _id: "5f2e9e61b8daf121c0c2cee3",

  }]
} 
}
 
test('renders search title component', () => {
    render(<MainSearch />, {wrapper: AppProviders});
    expect(screen.getByText(/search/i)).toBeInTheDocument();
  });

test('renders search input element', () => {
    render(<MainSearch />, {wrapper: AppProviders})
    expect(screen.getByPlaceholderText(/search by typing.../i)).toBeInTheDocument()
});

test('search component displays fetched data properly', async () => {
  axiosMock.post.mockResolvedValueOnce(fakeData)

  render(<MainSearch />, {wrapper: AppProviders});

  await act(async () => {
    userEvent.type(screen.getByRole('textbox', { name: /searchinput/i }), 'brown')
  })   

  await waitForElement(() => screen.getByText(/leopard sweatshirt - brown/i))
  expect(screen.getByText(/leopard sweatshirt - brown/i)).toBeInTheDocument()   
})

test('search component displays fetched data properly', async () => {
  axiosMock.post.mockResolvedValueOnce(fakeData)

  render(<MainSearch />, {wrapper: AppProviders})

  await act(async () => {
    userEvent.type(screen.getByRole('textbox', { name: /searchinput/i }), 'brown')
  })   

  await waitForElement(() => screen.getByText(/leopard sweatshirt - brown/i))
  expect(screen.getByText(/leopard sweatshirt - brown/i)).toBeInTheDocument() 
})


test('search component does not display anything if nothing has been typed', async () => {
  axiosMock.post.mockResolvedValueOnce(fakeData)

  render(<MainSearch />, {wrapper: AppProviders});

  await act(async () => {
    userEvent.type(screen.getByRole('textbox', { name: /searchinput/i }), '')
  })   

  expect(screen.getByText(/no found items./i)).toBeInTheDocument()  
})


 

