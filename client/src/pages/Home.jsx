import { Link } from "react-router-dom";
import "./Home.scss"

function Home() {
  
  const posts = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo repellendus quis minima? Esse, animi facilis! Aliquid ad sit officiis autem reprehenderit expedita, magnam dolorem ratione a repellat id delectus voluptatibus.",
      img : "https://picsum.photos/id/227/600/400"
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo repellendus quis minima? Esse, animi facilis! Aliquid ad sit officiis autem reprehenderit expedita, magnam dolorem ratione a repellat id delectus voluptatibus.",
      img : "https://picsum.photos/id/228/600/400"
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo repellendus quis minima? Esse, animi facilis! Aliquid ad sit officiis autem reprehenderit expedita, magnam dolorem ratione a repellat id delectus voluptatibus.",
      img : "https://picsum.photos/id/229/600/400"
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo repellendus quis minima? Esse, animi facilis! Aliquid ad sit officiis autem reprehenderit expedita, magnam dolorem ratione a repellat id delectus voluptatibus.",
      img : "https://picsum.photos/id/230/600/400"
    },
    {
      id: 5,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo repellendus quis minima? Esse, animi facilis! Aliquid ad sit officiis autem reprehenderit expedita, magnam dolorem ratione a repellat id delectus voluptatibus.",
      img : "https://picsum.photos/id/231/600/400"
    }
  ]
  
  return(
    <div className="home">
      <div className="posts">
        { posts.map(post => (
          <div className="post" key={ post.id }>
            <div className="img">
              <img src={ post.img } alt={post.title} />
            </div>
            <div className="content">
              <Link to={ `/post/${post.id}` } className="link">
                <h2>{ post.title }</h2>
                <p>{ post.content }</p>
                <a href="/single" className="button">Leer mas</a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home