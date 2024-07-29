import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <header>
      <Header/>
    </header>
    <main>
      <div className=" relative mt-5">
        <Image src="/home.svg" width={60} height={60} alt={""} className=" w-full "/>
        <div className=" bg-bgcolor absolute top-0 left-0 w-full h-full flex justify-center items-center">

          <div className=" text-white flex flex-col justify-center gap-4 ">
            <div>
              <p className=" text-sm text-center font-medium ">Добро пожаловать на наш веб-сайт</p>
            </div>
            <div>
              <p className=" text-center font-medium text-6xl">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <button className=" bg-maincolor text-lg px-8 py-5 mx-80">ОРГАНИЗОВАТЬ ОБСЛУЖИВАНИЕ</button>
          </div>
        </div>
      </div>

      <section>
        <div className=" bg-white10 px-24 py-12 w-1/3">
          <div>
            <Image src="/sec1.svg" width={20} height={20} className=" w-4/5" alt={""} />
          </div>
          <div>
            <p>Мы готовы позаботиться о
              Ваша семья с большим удовольствием.</p>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur. Nulla posuere egestas risus facilisis ipsum scelerisque neque venenatis. Lorem ipsum dolor sit amet consectetur. Nulla posuere egestas risus facilisis ipsum scelerisque neque venenatis.</p>
          </div>
          <div>
            <button>Связаться</button>
            <img src="/rectangle.svg"/>
          </div>
        </div>
        <div></div>
      </section>
    </main>
    </>
  );
}
