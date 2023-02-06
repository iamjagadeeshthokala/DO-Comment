import React from 'react'

const Comment = (props) => {
  return (
    <>
        <div className="comment">
            <div className="text">{props.comment.text}</div>
            <div className="button-wrapper">
                <button>Delete</button>
                <button>Edit</button>
            </div>
        </div>
    </>
  )
}

export default Comment 