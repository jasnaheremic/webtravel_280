import { Link } from "react-router-dom"
import { posts } from "../data"

const Card = ({post}) => {
    return (
        <div className="card">
            <Link className="link" to={`/post/${post.id}`}>
            <span className="title">{post.title}</span>
            <img src={post.img} alt="" className="img" />
            <p className="desc">{post.descr}</p>
            <button className="cardButton">Pročitaj više</button>
            </Link>
        </div>
    )
}

export default Card