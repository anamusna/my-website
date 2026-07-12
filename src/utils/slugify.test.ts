import { getServiceDetailPath, slugify } from "./slugify";

describe("slugify", () => {
  it("builds stable slugs from blog titles", () => {
    expect(
      slugify("Event-Driven Microservices: When Your App Gets Too Big"),
    ).toBe("event-driven-microservices-when-your-app-gets-too-big");

    expect(slugify("React Hooks ")).toBe("react-hooks");
  });

  it("builds stable slugs from service titles", () => {
    expect(slugify("Production Web & Mobile Products")).toBe(
      "production-web-mobile-products",
    );
  });

  it("builds service detail paths", () => {
    expect(getServiceDetailPath("Production Web & Mobile Products")).toBe(
      "/services/production-web-mobile-products",
    );
  });
});
