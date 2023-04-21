import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import App from "../App"
import DisplayPicture from "../components/DisplayPicture/DisplayPicture"
import PostCard from "../components/PostCard/PostCard"
import SearchBar from "../components/SearchBar/SearchBar"

it("should show the titles of blog posts", () => {
    // 1. Arrange
    render(<PostCard/>)

    // 2. Act
    const postTitle = screen.getByRole("title")
    

    // 3. Assert
    expect(postTitle).toBeInTheDocument();
})

it("should show the comments on a blog post", () => {
    // 1. Arrange
    render(<App/>)

    // 2. Act
    const comments = screen.findByText(/[0-9]/)

    // 3. Assert
    expect(comments).toBeTruthy();
})

it("should show display placeholder text in the search bar", () => {
    // 1. Arrange
    render(<SearchBar />)

    // 2. Act
    const searchPlaceholder = screen.queryByPlaceholderText("Search...")

    // 3. Assert
    expect(searchPlaceholder).toBeTruthy();
})


it("should display the user avatar", () => {
    // 1. Arrange
    render(<DisplayPicture/>)

    // 2. Act
    const avatar = screen.getByRole("img")

    // 3. Assert
    expect(avatar).toBeTruthy();
})


it("should display render blog posts when app opens", () => {
    // 1. Arrange
    render(<App/>)

    // 2. Act
    const post = screen.findByText("Ipsom")

    // 3. Assert
    expect(post).toBeTruthy();
})



// it("should show user text and not the placeholder text in the search bar when typing", () => {
//     // 1. Arrange
//     render(<SearchBar/>)

//     // 2. Act
//     const searchPlaceholder = screen.queryByPlaceholderText("Search...")
//     const searchBox = screen.getByPlaceholderText(/search.../i)
//     userEvent.type(searchBox, "blog")

//     // 3. Assert
//     expect(searchBox).toBeFalsy();
// })
