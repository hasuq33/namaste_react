import Body from '../Body';
import { render , screen , act , fireEvent} from '@testing-library/react';
import MOCK_DATA from "../mocks/mockResListData.json";
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom';


global.fetch = jest.fn(() => {
    return Promise.resolve({
      json: () => {
        return Promise.resolve(MOCK_DATA);
      },
    });
  });
// Here we are Mock the Fetch Function for test because in jsDom fetch() superpower is not avilable 

it("Should render The Body Component",async ()=>{
    await act(async () =>
        render(
          <BrowserRouter>
            <Body />
          </BrowserRouter>
        )
      );

      const searchInput = screen.getByTestId("searchInput");
      fireEvent.change(searchInput,{target:{value:"burger"}});

    // expect(searchBtn).toBeInTheDocument();
})