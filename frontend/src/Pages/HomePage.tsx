import CardLayout from "../Layouts/CardLayout";
import Header from "../Components/Header/Header";
import HomePageIntro from "../Components/Intro/HomePageIntro";
const HomePage = () => {
  return (
    <div className=" ">
      <div>
        <HomePageIntro />
      </div>
      <div className=" mt-32">
        <Header />
        <CardLayout />
      </div>
      {/* <PostWithLike /> */}
    </div>
  );
};

export default HomePage;
