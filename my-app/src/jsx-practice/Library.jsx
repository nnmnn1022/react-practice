import React from "react";
import Book from "./Book";

function Library(props) {
    return (
        <div>
            <Book name="처음 만난 리액트" numOfPage={300} />
            <Book name="처음 만난 이 느낌 이대로" numOfPage={400} />
            <Book name="처음 만난 JS" numOfPage={200} />
        </div>
    )
}

export default Library;