import Header from "../Header";
import { render , screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

it('Should Load my Header Component with a login Button', ()=>{
    render(
    <BrowserRouter>
        <Provider store={appStore}>     
            <Header />
        </Provider>
    </BrowserRouter>
   );

   const button = screen.getByRole('button',{name:'login'});

    //  Aasertion
    expect(button).toBeInTheDocument();
});

it('Should Load my Header Component with Cart Items',()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>     
            <Header />
        </Provider>
    </BrowserRouter>
    )

    const cartItems = screen.getByText(/Cart/)

    // Assert
    expect(cartItems).toBeInTheDocument()
});

it("Should change the Login Button to Logout click",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>     
            <Header />
        </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole("button",{name:"login"});
    fireEvent.click(loginButton);
    const logoutbutton = screen.getByRole("button",{name:'logout'});
    expect(logoutbutton).toBeInTheDocument();
})