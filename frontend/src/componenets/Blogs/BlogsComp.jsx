import React from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/Places/tajmahal.jpg";
import Img2 from "../../assets/Places/water.jpg";
import Img3 from "../../assets/Places/boat.jpg";
const BlogsComp = () => {
  const BlogsData = [
    {
      id: 1,
      image: Img1,
      title: "The 10 best places to visit in India",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio impedit et id rem deserunt esse, aut eligendi architecto asperiores quod quasi delectus, doloribus quos ad iure hic perspiciatis sed consequatur exercitationem at unde? Sequi modi quas soluta harum, aut, adipisci fugiat accusamus atque, quidem hic maiores! Voluptatem laudantium temporibus reprehenderit, quo ipsam molestiae voluptas commodi itaque possimus ipsum non corporis incidunt quos vero facere odio quod necessitatibus dolor dolore enim sit nam ex quas? Eligendi provident esse laudantium culpa eius et ex ducimus, molestias minus quia nostrum? Accusamus dolorem iusto voluptas maiores tempora dolorum corporis quasi a ipsam, reiciendis cumque sed fugiat vero quo, pariatur eligendi? Tenetur repudiandae, alias rem quo fugit magni illo maiores, harum illum nesciunt quidem. Pariatur.",
      author: "Anuj Verma",
      date: "April,2022",
    },
    {
      id: 2,
      image: Img2,
      title: "The 10 best places to visit in India",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      author: "Anuj Verma",
      date: "April,2022",
    },
    {
      id: 3,
      image: Img3,
      title: "The 10 best places to visit in India",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      author: "Anuj Verma",
      date: "April,2022",
    },
  ];
  return (
    <div>
      <div data-aos="fade-up" className="container ">
        <h1 className="my-8 border-l-8 border-primary50 py-2 pl-2 text-3xl font-bold">
          Our latest Blogs
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {BlogsData.map((item, index) => (
            <BlogCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsComp;
