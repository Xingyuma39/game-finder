import { useState, useEffect } from "react"
import { postComment, getComments } from "../../../utils/backend"
import Comment from "../Comment"

export default function commentSection({ gameId }) {
    // Save comments queried from the database in state
    const [comments, setComments] = useState([])
    const [showCreateForm, setShowCreateForm] = useState(false)
    const [createFormData, setCreateFormData] = useState({
        name: '',
        rating: '',
        content: ''
    })

    // Query the database for all comments that pertain to this game on component mount
    useEffect(() => {
        getComments(gameId)
            .then(comments => setComments(comments))
    }, [])


    // Update the form fields as the user types
    function handleInputChange(event) {
        setCreateFormData({
            ...createFormData,
            [event.target.name]: event.target.value
        })
    }

    // Render a form that allows a user to create a comment on submit
    function toggleCreateForm() {
        setShowCreateForm(!showCreateForm)
    }

    // Update the comments in the comment section after a database transaction
    function refreshComments() {
        getComments(gameId)
            .then(newCommentData => setComments(newCommentData))
    }

    // Execute form submission logic
    function handleSubmit(event) {
        // prevent the page from reloading
        event.preventDefault()
        // clear the form
        setCreateFormData({
            name: '',
            rating: '',
            content: ''
        })
        // close the form
        setShowCreateForm(false)
        // create the comment in the backend
        postComment({ ...createFormData, gameId: gameId })
            .then(() => refreshComments())
    }


    // conditionally render comments
    let commentElements = [<p key='0' className='text-center text-green-100'>No reviews yet. Add a review!</p>]
    if (comments.length > 0) {
        commentElements = comments.map(comment => {
            return <Comment
                key={comment._id}
                data={comment}
                refreshComments={refreshComments}
            />
        })
    }

    // conditionally display the text of the create form button
    let btnText = 'Add Review'
    if (showCreateForm) {
        btnText = 'Cancel'
    }

    return (
        <>
            <div className="min-h-screen flex items-start justify-center px-4">
                <div className="max-w-4xl bg-slate-700 w-full rounded-lg shadow-xl border border-gray-500">
                    <div className="p-4 border-b border-gray-500 hover:bg-gray-700 flex">
                        <h2 className="text-green-400 font-bold text-2xl ">
                            Player Reviews
                        </h2>
    
                        <button onClick={toggleCreateForm} className="group relative text-green-100 box-border mx-1 px-3 py-[6px] text-lg border-2 border-gray-400 rounded-lg font-semibold bg-gray-900 overflow-hidden border-gray-600 w-36 ml-auto">{btnText}<div className="absolute inset-0 h-full w-full scale-0 transition-all duration-300 group-hover:scale-100 group-hover:bg-gray-200/40"></div></button>
                    </div>
                    <div className="p-4 border-b border-gray-500">
                        {
                            showCreateForm && <form
                                onSubmit={handleSubmit}
                                className="bg-gray-700 rounded-lg p-4 my-4 border-gray-400 border-2 w-[80vw] mx-auto text-right">
                                <input
                                    name="name"
                                    className="px-2 py-1 w-full bg-gray-300"
                                    placeholder="Your name"
                                    value={createFormData.name}
                                    onChange={handleInputChange}
                                />
                                <br/>
                                <br/>
                                <input
                                    name="rating"
                                    className="px-2 py-1 w-full bg-gray-300"
                                    placeholder="Give a rating!"
                                    value={createFormData.rating}
                                    onChange={handleInputChange}
                                />
                                <br/>
                                <textarea
                                    name="content"
                                    className="p-2 my-2 h-[100px] w-full bg-gray-300"
                                    placeholder="Share your thoughts!"
                                    value={createFormData.content}
                                    onChange={handleInputChange}
                                />
                                <button
                                    type="submit"
                                    className="text-white hover:bg-green-800 font-bold py-2 px-4 bg-green-900 rounded cursor-pointer mr-2">
                                    Post
                                </button>
                            </form>
                        }

                        {/* Display the value of the commentElements variable */}
                        {commentElements}
                    </div>
                </div>
            </div>
        </>
    )
}
