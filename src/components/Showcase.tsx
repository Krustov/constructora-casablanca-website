import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";

export function Showcase() {
  return (
    <section className="bg-casa-dark overflow-hidden relative">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
      
      <div className="flex flex-col relative z-10">
        <ContainerScroll
          titleComponent={
            <>
              <h2 className="text-4xl md:text-5xl font-heading font-semibold text-white mb-4 uppercase">
                Tecnología en estabilización <br />
                <span className="text-4xl md:text-[6rem] font-black mt-2 leading-none text-casa-red">
                  del terreno
                </span>
              </h2>
              <p className="text-gray-400 font-sans max-w-2xl mx-auto mb-8">
                Mejoramos la capacidad estructural del suelo, controlamos el polvo y aumentamos la resistencia a la erosión con polímeros acuosos de alto poder ligante.
              </p>
            </>
          }
        >
          <div className="grid grid-cols-2 grid-rows-2 gap-2 h-full w-full">
            <img
              src="https://i.postimg.cc/KY2f3ZjR/Imagen1.jpg"
              alt="Estabilización de terreno 1"
              className="rounded-tl-2xl object-cover h-full w-full"
              draggable={false}
            />
            <img
              src="https://i.postimg.cc/VNgTW7JN/Whats-App-Image-2026-02-27-at-18-47-28-(4).jpg"
              alt="Estabilización de terreno 2"
              className="rounded-tr-2xl object-cover h-full w-full"
              draggable={false}
            />
            <img
              src="https://i.postimg.cc/65RBfXt6/Whats-App-Image-2026-02-27-at-18-47-28-(3).jpg"
              alt="Estabilización de terreno 3"
              className="rounded-bl-2xl object-cover h-full w-full"
              draggable={false}
            />
            <img
              src="https://i.postimg.cc/LXwMjyWf/Whats-App-Image-2026-02-27-at-18-47-29-(41).jpg"
              alt="Estabilización de terreno 4"
              className="rounded-br-2xl object-cover h-full w-full"
              draggable={false}
            />
          </div>
        </ContainerScroll>
      </div>
    </section>
  );
}
