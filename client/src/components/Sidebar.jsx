import "./Sidebar.scss"

function Sidebar() {

 
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
    <div className="menu">
      <h1>Post Populares</h1>
      { posts.map(post => (
        <div className="post" key={post.id}> 
          <img src={post.img} alt={post.title} />
          <h2 className="title-post">{post.title}</h2>
        </div>
      ))}
    </div>
   
  )
}

export default Sidebar