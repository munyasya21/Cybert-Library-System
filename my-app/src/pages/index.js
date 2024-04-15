import Image from "next/image";
import { Inter } from "next/font/google";
import books from "../assets/images/books.png";
import Navbar from "../components/Navbar.jsx";
import Shape1 from "../assets/images/Shape1.png";
import Shape2 from "../assets/images/Shape2.png";
import Shape3 from "../assets/images/Shape3.png";
import Book3 from "../assets/images/Book3.jpg";
import Book4 from "../assets/images/Book4.jpg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <section
      id="firstSection"
      className="flex min-h-screen flex-col  font-serif justify-between p-10  bg-gradient-to-r from-black to-green-500"
    >
      {/* home */}
      <div className="flex text-white">
        <div>
          <Navbar />
        </div>

        <div className=" pt-56 pl-12   ">
          <h1 className="font-bold text-5xl tex-gradient-to-r from-blue-500 to-green-500 duration-500">
            Explore Our Library
            <br />
            Your Gateway to Knowledge
          </h1>
          <p className="pt-4">
            Our new library is a game-changer, offering innovative solutions for
            developers.
            <br /> With its user-friendly interface and robust features, it
            simplifies complex tasks <br />
            and enhances productivity significantly.
          </p>
          <div className="flex">
            <div className="pt-4 ">
              <button className="rounded-lg pt-3 pb-3 pr-5 pl-5 bg-black justify-center items-center whitespace-nowrap ">
                <a href=" Signup"> Sign Up</a>
              </button>
            </div>
            <div className="pt-4 pl-4 ">
              <button className="rounded-lg pt-3 pb-3 pr-5 pl-5 bg-black justify-center items-center whitespace-nowrap ">
                <a href="LogIn">Log In</a>
              </button>
            </div>
          </div>
        </div>

        {/* image to the right */}
        <div className="pl-56 pt-14 pb-24">
          <Image
            src={Book4}
            width={420}
            height={480}
            className=" rounded-full object-cover"
            alt="books image"
          />
        </div>
      </div>
      {/* aboutus */}
      <div className="flex pt-28">
        <div className="  pl-14">
          {/* Image to the left */}
          <Image
            src={Book3}
            width={660}
            height={560}
            className="rounded-xl"
            alt="book img"
          />
        </div>
        <div className="pl-44 justify-center items-center ">
          <h1 className="text-5xl font-bold ">About Us</h1>
          <p className="pt-8">
            Our new library is a vibrant hub of knowledge and community
            engagement.
            <br /> Nestled in the heart of our town, it stands as a beacon of
            learning and discovery.
            <br /> With its modern architecture and inviting interior, the
            library welcomes visitors
            <br /> of all ages to explore its extensive collection of books,
            periodicals, and digital resources.
            <br />
            From classic literature to the latest bestsellers, there is
            something to captivate every
            <br /> reader's interest. The library also offers state-of-the-art
            technology, including
            <br /> computer stations and high-speed internet access, ensuring
            everyone can benefit
            <br /> from its educational offerings.
          </p>
        </div>
      </div>
      <div className="pt-20">
        <h1 className="  text-center text-5xl font-semibold">Products</h1>
        <p></p>
      </div>
    </section>
  );
}
