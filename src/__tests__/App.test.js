import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';


describe("Render",()=>{
  it("should render the element with id = div-app", () => {
    render(<App/>)
    const targetDiv = screen.getByText("id")
    expect(targetDiv).toBeInTheDocument()
  })
})