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
        <button onClick={() => { setShowEditForm(true) }} className="text-green-100 box-border mx-1 px-3 py-[6px] text-lg border border-gray-600 rounded-lg font-semibold bg-slate-900 hover:bg-slate-700 hover:opacity-80 hover:border-gray-400 transition-all duration-200 ease-in-out ml-auto"> ✎ Edit </button>

        <button onClick={handleDelete} className="text-red-400 box-border mx-1 px-3 py-[6px] text-lg border border-gray-600 rounded-lg font-semibold bg-slate-900 hover:bg-slate-700 hover:opacity-80 hover:border-gray-400 transition-all duration-200 ease-in-out"> ⛌ Delete </button>
    </div>

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
                    <button onClick={() => { setShowEditForm(false) }}className="text-red-400 box-border mx-1 px-3 py-[6px] text-lg border border-gray-600 rounded-lg font-semibold bg-slate-900 hover:bg-slate-700 hover:opacity-80 hover:border-gray-400 transition-all duration-200 ease-in-out ml-auto mr-2"> Cancel </button>

                    <button type="submit" className="text-green-400 box-border mx-1 px-3 py-[6px] text-lg border border-gray-600 rounded-lg font-semibold bg-slate-900 hover:bg-slate-700 hover:opacity-80 hover:border-gray-400 transition-all duration-200 ease-in-out ml-auto mr-2 w-20"> Post </button>
                </div>
            </form>
        )

    } else {
        return (
            <div
                className="bg-gray-600 rounded-lg p-4 my-4 border-gray-500 border-2 w-full max-w-4xl mx-auto hover:bg-gray-700">
                <p className="text-green-400 font-bold">{data.name}</p>
                <p className="text-green-100 my-2">Rating: {data.rating}⭐</p>
                <p className="text-green-100 my-2">{data.content}</p>
                
                {editDeleteButtons}

            </div>
        )
    }
}
