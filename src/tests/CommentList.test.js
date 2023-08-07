import {render, screen,fireEvent} from "@testing-library/react"
import userEvent  from '@testing-library/user-event'
import CommentList from "../component/CommentList";


test('Comments are not available', ()=> {
    render(<CommentList allcomments={[]} />)
    const h2Element = screen.getByText('no comments', {exact: false})
    expect(h2Element).toBeInTheDocument()

    // const checkbox = screen.getByLabelText('i agree to terms and com')
})

test('List all Comments', ()=> { 
    const comments = [
        {id: 1, text: "Comment 1"}, 
        {id: 2, text: "Comment 2"}
    ];
    render(<CommentList allcomments={comments} />)
    const h2Element = screen.queryByText('no comments', {exact: false})
    expect(h2Element).not.toBeInTheDocument()

    const commentLi = screen.getAllByRole('listitem')
    expect(commentLi.length).toBe(comments.length)
})
