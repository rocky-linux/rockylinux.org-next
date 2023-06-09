import { render } from "@testing-library/react";
// import { render } from "test-utils";
import HeaderComponent from "./Header";
import { NextIntlProvider } from "next-intl";
import messages from "@/dictionaries/en.json";
import React, { ReactElement } from "react";

const Header = (props: typeof HeaderComponent): ReactElement => (
  <NextIntlProvider messages={messages}>
    <HeaderComponent {...props} />
  </NextIntlProvider>
);

describe("Layout Header Component", () => {
  test("renders header component", () => {
    const { getByText } = render(<Header />);
    const linkElement = getByText(/Rocky Linux/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("renders logo", () => {
    const { getByAltText } = render(<Header />);
    const logoElement = getByAltText(/Rocky Linux Logo/i);
    expect(logoElement).toBeInTheDocument();
  });

  test("renders navigation links", () => {
    const { getByText } = render(<Header />);
    const newsLink = getByText(/News/i);
    const aboutLink = getByText(/About/i);
    const communityLink = getByText(/Community/i);
    const documentationLink = getByText(/Documentation/i);
    expect(newsLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(communityLink).toBeInTheDocument();
    expect(documentationLink).toBeInTheDocument();
  });

  test("renders download link", () => {
    const { getByText } = render(<Header />);
    const downloadLink = getByText(/Download/i);
    expect(downloadLink).toBeInTheDocument();
  });
});
