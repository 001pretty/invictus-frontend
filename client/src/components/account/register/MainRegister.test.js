import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils'

import MainRegister from './MainRegister'

import AppProviders from 'context/AppProviders'
 
 
test("invalid email throws error", async () => {
  const mockOnSubmit = jest.fn(data => data)
  const handleSubmit = jest.fn(data => data)
  render(<MainRegister onSubmit={handleSubmit(mockOnSubmit)}/>, {wrapper: AppProviders})

  await act(async () => {
    userEvent.type(screen.getByRole('textbox'), '')
    userEvent.type(screen.getByPlaceholderText(/password/i), '1234567')
  })   

  await act(async () => { 
    userEvent.click(screen.getByRole('button', { name: /register/i }))
  }) 

  expect(handleSubmit).toHaveBeenCalledTimes(1) 
  expect(screen.getByText(/email is invalid/i)).toBeInTheDocument()
}) 

test("invalid password throws error", async () => {
  const mockOnSubmit = jest.fn(data => data)
  const handleSubmit = jest.fn(data => data)
  render(<MainRegister onSubmit={handleSubmit(mockOnSubmit)}/>, {wrapper: AppProviders})

  await act(async () => {
    userEvent.type(screen.getByRole('textbox'), 'duck@test.com')
    userEvent.type(screen.getByPlaceholderText(/password/i), '')
  })   

  await act(async () => { 
    userEvent.click(screen.getByRole('button', { name: /register/i }))
  }) 

  expect(handleSubmit).toHaveBeenCalledTimes(1) 
  expect(screen.getByText(/password is invalid/i)).toBeInTheDocument()
})

test('calls the onSubmit function', async () => {
  const mockOnSubmit = jest.fn(data => data)
  const handleSubmit = jest.fn(data => data)
  render(<MainRegister onSubmit={handleSubmit(mockOnSubmit)}/>, {wrapper: AppProviders})
  
  await act(async () => {
    userEvent.type(screen.getByRole('textbox'), 'duck@gmail.com')
    userEvent.type(screen.getByPlaceholderText(/password/i), '1234567')
  })   

  await act(async () => { 
    userEvent.click(screen.getByRole('button', { name: /register/i }))
  }) 

  expect(handleSubmit).toHaveBeenCalledTimes(1) 
})    

