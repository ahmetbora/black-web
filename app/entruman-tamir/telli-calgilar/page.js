"use client"
import AnimatedText from "@/components/common/AnimatedText";
import TamirGitarGrubu from "./tamir-gitar-grubu";
import TamirSaz from "./tamir-saz";
import TamirUd from "./tamir-ud";
const BlackTelliCalgilar = () => {
  const dark = false;
  return (
    <>
      <div className="bg-dark light-content scrollSpysection">
        <div className="container  align-items-center pt-10 pb-30 pt-sm-120 pb-sm-120">


          <div className="row">

            <div className="col mt-30 text-center">

              <h1 className="hs-title-1 mb-30 mt-100">

                <AnimatedText text="Telli Çalgılar" />

              </h1>

            </div>



          </div>

        </div>
      </div >
      <TamirGitarGrubu />
      <TamirSaz />
      <TamirUd />
    </ >



  )
}



export default BlackTelliCalgilar;