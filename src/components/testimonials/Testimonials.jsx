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
        "Hisham is one of the best things to walk on this planet ",
    },
    {
      id: 2,
      name: "Rachel Walker",
      title: "Careet Coach | Educator",
      img:
        `${rachel}`,
      icon: "assets/twitter.png",
      desc:
        "Hisham is a wonderful person and developer",
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
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}