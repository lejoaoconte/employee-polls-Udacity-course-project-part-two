import "@testing-library/jest-dom";

import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import store from "redux/store";
import { Default as Layout } from "layouts/Default";

import NavBar from ".";

describe("NavBar", () => {
  const setup = () => {
    const component = render(
      <Layout>
        <Provider store={store}>
          <MemoryRouter>
            <NavBar />
          </MemoryRouter>
        </Provider>
      </Layout>
    );
    
    expect(component).toMatchSnapshot();

    const navbar = component.getByTestId("navbar-test");
    const logout = component.getByTestId("navbar-button-logout-test");
    const switchComponent = component.getByTestId("navbar-switch-test");
    const openMenu = component.getByTestId("navbar-button-open-test");

    return {
      navbar,
      logout,
      switchComponent,
      openMenu,
      ...component,
    };
  };

  it("Testing render on screen", () => {
    const { navbar }: any = setup();
    expect(navbar).toBeInTheDocument;
  });

  it("Test onClick buttons", () => {
    const { logout, switchComponent, openMenu }: any = setup();

    fireEvent.click(logout);
    fireEvent.click(switchComponent);
    fireEvent.click(openMenu);
  });
});
