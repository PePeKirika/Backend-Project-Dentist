import Banner from "@/components/Banner";
import { render, screen } from "@testing-library/react";

jest.mock("next/navigation", () => ({
    useRouter() {
        return {
            prefetch: () => null
        };
    },
}));

jest.mock("next-auth/react", () => ({
    useSession() {
        return {
            data: null,
            user: { name: "Tester" }
        };
    }
}));

describe("Banner", () => {
    it("renders banner", () => {
        render(<Banner />);
        expect(screen.getByText("CUD Dentist Clinic")).toBeInTheDocument();
    });

    it("render button", () => {
        render(<Banner />);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });

    it("render picture", () => {
        render(<Banner />);
        const image = screen.getByRole("img") as HTMLImageElement;
        expect(image.src).toContain("cover1.jpg");
    });
});