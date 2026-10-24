// export default function Home() {
//   return (
//     <main className="container section">
//       <p className="eyebrow">The Ageless Method</p>
//       <h1 className="section-title">Spaces That Never Go Out of Style</h1>
//       <p className="section-sub">Foundation check: fonts, colors, and spacing.</p>
//       <br />
//       <a className="btn btn-gold" href="#">Book a Consultation</a>
//     </main>
//   );
// }


// import EcosystemBar from "@/components/EcosystemBar/EcosystemBar";
// import Navbar from "@/components/Navbar/Navbar";
// import Hero from "@/components/Hero/Hero";

// export default function Home() {
//   return (
//     <>
//       <EcosystemBar />
//       <Navbar />
//       <main>
//         <Hero />
//       </main>
//     </>
//   );
// }


import EcosystemBar from "@/components/EcosystemBar/EcosystemBar";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import TwinDisciplines from "@/components/TwinDisciplines/TwinDisciplines";
import DesignServices from "@/components/DesignServices/DesignServices";

export default function Home() {
  return (
    <>
      <EcosystemBar />
      <Navbar />
      <main>
        <Hero />
        <TwinDisciplines />
        <DesignServices />
      </main>
    </>
  );
}