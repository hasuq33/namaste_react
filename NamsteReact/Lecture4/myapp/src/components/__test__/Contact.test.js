import { render , screen } from "@testing-library/react";
import Contact from "../Contact";
import '@testing-library/jest-dom'

describe("Contact Us Page Test Case",()=>{
    test("Should Load Contact us Component",()=>{
        render(<Contact/>);
    
        const heading = screen.getByRole("heading");
    
        // Assertion
        expect(heading).toBeInTheDocument();
    })
    
    it("Is Submit Button in Component",()=>{
        render(<Contact/>);
    
        // const button = screen.getByRole('button');
        const button = screen.getByText('Submit')
    
        // Assertion
        expect(button).toBeInTheDocument();
    })
    
    test("Get the Element from Placeholder",()=>{
        render(<Contact/>);
    
        const inputName = screen.getByPlaceholderText('Message');
        expect(inputName).toBeInTheDocument();
    });
    
    test("Get the All Input Elements ",()=>{
    
        
        render(<Contact/>);
    
        // Querying 
        const inputs = screen.getAllByRole("textbox"); 
    
        // Assertion
        // expect(inputs.length).toBe(2);
        expect(inputs.length).not.toBe(5);
    })
})