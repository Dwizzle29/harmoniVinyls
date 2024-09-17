import HomeItemCard from "../components/homeItemCard";
import SOSBack from "../components/images/5SOSBack.png";
export default function Home() {
  const images = [
    {
      id: "0",
      url: SOSBack,
      link: "/product",
    },
    {
      id: "1",
      url: "https://via.placeholder.com/150/0000FF",
      link: "/product",
    },
  ];

  return (
    <div className="App">
      <HomeItemCard images={images} />
    </div>
  );
}
