import { useRef } from "react"

export default function AddComment(props){
    let input=useRef()
    function onAdd(e){
        e.preventDefault()
        let data={text:input.current.value}
        props.postComment(data)
    }
    return (
        <>
            <form action="">
                <input ref={input} type="text" />
                <button onClick={onAdd}>Add</button>
            </form>
        </>
    )
}