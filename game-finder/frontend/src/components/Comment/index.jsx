import { useState } from "react"
import { updateComment, deleteComment } from "../../../utils/backend"

export default function Comment({ data, refreshComments }) {
    const [showEditForm, setShowEditForm] = useState(false)
    const [editFormData, setEditFormData] = useState({
        name: data.name,
        rating: data.rating,
        content: data.content
    })

    // Update the form fields as the user types
    function handleInputChange(event) {
        setEditFormData({
            ...editFormData,
            [event.target.name]: event.target.value
        })
    }

    // Execute form submission logic
    function handleSubmit(event) {
        // prevent the page from reloading
        event.preventDefault()
        // close the form
        setShowEditForm(false)
        // update the comment in the backend
        updateComment(editFormData, data._id)
            .then(() => refreshComments())
    }

    // Delete a comment
    function handleDelete() {
        deleteComment(data._id)
            .then(() => refreshComments())
    }

    console.log(data)

    let editDeleteButtons = 
    <div className="flex justify-end">
        {/* <button
        onClick={() => { setShowEditForm(true) }}
        className="text-white hover:bg-slate-900 font-bold py-2 px-4 bg-slate-800 rounded cursor-pointer mr-2">
            Edit
        </button>
        <button
        onClick={handleDelete}
        className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded">
            Delete
        </button> */}

        <button onClick={() => { setShowEditForm(true) }} className="group relative text-green-100 box-border mx-1 px-3 py-[6px] text-lg rounded-lg font-semibold bg-gray-900 overflow-hidden w-16 ml-auto">Edit<div className="absolute inset-0 h-full w-full scale-0 transition-all duration-300 group-hover:scale-100 group-hover:bg-gray-200/40"></div></button>

        <button onClick={handleDelete} className="group relative text-red-400 box-border mx-1 px-3 py-[6px] text-lg rounded-lg font-semibold bg-gray-900 overflow-hidden w-20">Delete<div className="absolute inset-0 h-full w-full scale-0 transition-all duration-300 group-hover:scale-100 group-hover:bg-gray-200/40"></div></button>
    </div>

    // if (data.userId === req.user.id) {
    //     editDeleteButtons = <div>

    //     </div>
    // }

    // Change the comment to a form if the showEditForm state variable is true
    if (showEditForm) {
        return (
            <form
                onSubmit={handleSubmit}
                className="bg-gray-700 rounded-lg p-4 my-4 border-gray-400 border-2 w-[80vw] mx-auto text-right">
                <input
                    name="name"
                    className="px-2 py-1 w-full bg-gray-300"
                    placeholder="Your name"
                    value={editFormData.name}
                    onChange={handleInputChange}
                />
                <br />
                <br />
                <input
                    name="rating"
                    className="px-2 py-1 w-full bg-gray-300"
                    placeholder="Give a rating!"
                    value={editFormData.rating}
                    onChange={handleInputChange}
                />
                <br />
                <textarea
                    name="content"
                    className="p-2 my-2 h-[100px] w-full bg-gray-300"
                    placeholder="Share your thoughts!"
                    value={editFormData.content}
                    onChange={handleInputChange}
                />
                <div>
                    <button onClick={() => { setShowEditForm(false) }} className="group relative text-red-400 box-border mx-1 px-3 py-[6px] text-lg rounded-lg font-semibold bg-gray-900 overflow-hidden w-20 ml-auto mr-2">Cancel<div className="absolute inset-0 h-full w-full scale-0 transition-all duration-300 group-hover:scale-100 group-hover:bg-gray-200/40"></div></button>

                    <button type="submit" className="group relative text-green-400 box-border mx-1 px-3 py-[6px] text-lg rounded-lg font-semibold bg-gray-900 overflow-hidden w-20 ml-auto">Post<div className="absolute inset-0 h-full w-full scale-0 transition-all duration-300 group-hover:scale-100 group-hover:bg-gray-200/40"></div></button>
                </div>
            </form>
        )

        //  Default JSX of each comment
    } else {
        return (
            <div
                className="bg-gray-600 rounded-lg p-4 my-4 border-gray-500 border-2 w-[80vw] mx-auto hover:bg-gray-700">
                <p className="text-green-400 font-bold">{data.name}</p>
                <p className="text-green-100 my-2">Rating: {data.rating}⭐</p>
                <p className="text-green-100 my-2">{data.content}</p>
                
                {editDeleteButtons}

            </div>
        )
    }
}
