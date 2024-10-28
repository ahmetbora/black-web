"use client"
import BlackFooter from "../../tools/BlackFooter";
import HeaderBlack from "../../tools/HeaderBlack";
import { blackMenu } from "@/data/menuBlack";
import TamirKlarnet from "./Tamir-klarnet";
import TamirYanflut from "./Tamir-yanflut";
import TamirSaksafon from "./tamir-Saksafon";
import AnimatedText from "@/components/common/AnimatedText";

const TamirUflemeliCalgilar = () => {
    return (
        <>
            <div className="bg-dark light-content scrollSpysection">
                <div className="container  align-items-center pt-10 pb-30 pt-sm-120 pb-sm-120">


                    <div className="row">

                        <div className="col mt-30 text-center">

                            <h1 className="hs-title-1 mb-30 mt-100">

                                <AnimatedText text="Üflemeli Çalgılar" />

                            </h1>

                        </div>



                    </div>

                </div>
            </div >
            <TamirKlarnet />
            <TamirYanflut />
            <TamirSaksafon />
        </>

    )
}

export default TamirUflemeliCalgilar;