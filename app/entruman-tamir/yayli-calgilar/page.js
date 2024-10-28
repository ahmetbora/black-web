"use client"

import AnimatedText from "@/components/common/AnimatedText";
import TamirKeman from "./tamir-keman";
import TamirViyolensel from "./tamir-viyolonsel";
import TamirKontrBas from "./tamir-kontrbas";

const BlackYayliCalgilar = () => {
    return (
        <>
            <div className="bg-dark light-content scrollSpysection">
                <div className="container  align-items-center pt-10 pb-30 pt-sm-120 pb-sm-120">


                    <div className="row">

                        <div className="col mt-30 text-center">

                            <h1 className="hs-title-1 mb-30 mt-100">

                                <AnimatedText text="Yaylı Çalgılar" />

                            </h1>

                        </div>



                    </div>

                </div>
            </div >

            <TamirKeman />
            <TamirViyolensel />
            <TamirKontrBas />
        </>
    )
}

export default BlackYayliCalgilar;