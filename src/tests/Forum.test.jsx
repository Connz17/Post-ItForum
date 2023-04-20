import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

it("should show the titles of blog posts"), () => {
    // 1. Arrange
    render()

    // 2. Act
    const postTitle = screen.getByText("")
    

    // 3. Assert
    expect(postTitle).toBeInTheDocument();
}

it("should show the number of comments on a blog post"), () => {
    // 1. Arrange
    render()

    // 2. Act
    const commentsNumber = screen.findByText("")

    // 3. Assert
    expect(commentsNumber).toBeInTheDocument();
}

it("should show display placeholder text in the search bar"), () => {
    // 1. Arrange
    render()

    // 2. Act
    const searchPlaceholder = screen.queryByPlaceholderText("search...")

    // 3. Assert
    expect(searchPlaceholder).toBeTruthy();
}

it("should show user text and not the placeholder text in the search bar when typing"), () => {
    // 1. Arrange
    render()

    // 2. Act
    const searchPlaceholder = screen.queryByPlaceholderText("search...")
    const searchBox = screen.getByPlaceholderText(/search.../i)
    userEvent.type(searchBox, "search")

    // 3. Assert
    expect(searchPlaceholder).toBeFalsy();
}

it("should display the user avatar"), () => {
    // 1. Arrange
    render()

    // 2. Act
    const avatar = screen.getByRole("img")

    // 3. Assert
    expect(avatar).toBeTruthy();
}