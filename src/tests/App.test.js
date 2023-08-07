import {render, screen,fireEvent} from "@testing-library/react"
import userEvent  from '@testing-library/user-event'
import CommentList from "../component/CommentList";
import App from "../App";
test('Comment gets displayed after submitting', async ()=> {

    render(<App />)
    const checkbox = screen.getByLabelText('i agree to terms and conditions', {exact: false})
    const submitButton = screen.getByRole('button',{name: 'comment', exact: false})
    const commentInput = screen.getByPlaceholderText('write your comment here',{exact: false})

    await userEvent.type(commentInput, 'nice pic dear')
    await userEvent.click(checkbox)
    await userEvent.click(submitButton)

    // const commentLi = screen.getAllByAltText('nice pic dear', {exact: false})
    const commentLi = await screen.findByText('nice pic dear', {exact: false})
    expect(commentLi).toBeInTheDocument() 

})


test('2 Comment gets displayed after submitting', async ()=> {

    render(<App />)
    const checkbox = screen.getByLabelText('i agree to terms and conditions', {exact: false})
    const submitButton = screen.getByRole('button',{name: 'comment', exact: false})
    const commentInput = screen.getByPlaceholderText('write your comment here')

    await userEvent.type(commentInput, 'nice pic dear')
    await userEvent.click(checkbox)
    await userEvent.click(submitButton)

    await userEvent.clear(commentInput)

    await userEvent.type(commentInput, 'awesone')
    await userEvent.click(submitButton)

    const commentLi = screen.getAllByRole('listitem')
    expect(commentLi.length).toBe(2)

    // screen.debug()
    
})
