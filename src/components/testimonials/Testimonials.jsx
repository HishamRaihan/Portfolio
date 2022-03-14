import "./testimonials.scss";
import rachel from '../../assets/rachel.png'
import ben from '../../assets/ben.png'
import weston from '../../assets/weston.png'
// import rightArrow from '../../assets/right-arrow.png'

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Ben Jenkins",
      title: "Software Engineer | Educator | Former Robot Developer",
      img:
        `${ben}`,
      desc:
        "it's been a pleasure having you in class! You always seem like you're in a good mood and I really enjoy your questions. 🙂",
    },
    {
      id: 2,
      name: "Rachel Walker",
      title: "Careet Coach | Educator",
      img:
        `${rachel}`,
      icon: "assets/twitter.png",
      desc:
        "Hisham has the winning combination of a strong work ethic and a great sense of humor. His classmates loved working on projects with him, so I can confidently say that any team will be lucky to have him as their newest software engineer!",
        // this will be the biggest
      featured: true,
    },
    {
      id: 3,
      name: "Weston Bailey",
      title: "Software Engineer | Educator",
      img:
        `${weston}`,
      desc:
        "What else can I say, He's the best",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((list) => (
          <div className={list.featured ? "card featured" : "card"}>
            <div className="top">
              <img className="left" alt="" />
              <img
                className="user"
                src={list.img}
                alt=""
              />
              <img className="right" alt="" />
            </div>
            <div className="center">
              {list.desc}
            </div>
            <div className="bottom">
              <h3>{list.name}</h3>
              <h4>{list.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}