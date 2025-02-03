import { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";

export const Like = () => {

    const [likecount, setlikecount] = useState(0);
    const [dislikecount, setdislikecount] = useState(0);

    const handlelikecount = () => {
        if (likecount === 0) {
            setlikecount(1)
            setdislikecount(0)
        } else { setlikecount(0) }
    }

    const handledislikecount = () => {
        if (dislikecount === 0) {
            setdislikecount(1)
            setlikecount(0)
        } else { setdislikecount(0) }
    }

    return (
        <>
            <button onClick={handlelikecount}>
                <AiOutlineLike style={{ fill: likecount === 0 ? 'black' : 'green' }} /> <span>{likecount}</span>
            </button>
            <button onClick={handledislikecount}>
                <AiOutlineDislike style={{ fill: dislikecount === 0 ? 'black' : 'red' }} /> <span>{dislikecount}</span>
            </button>
        </>
    )
}