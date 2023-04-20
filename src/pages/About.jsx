
import moon from "../assets/moon.jpg"
import { Heading1, Heading2, Heading4 } from "../components/ui/Typography";

import Button from "../components/ui/Button";

const About = () => {
    return <div className="w-full flex flex-col min-h-screen justify-between">

        <main className="flex-1 bg-[#FFF7ED] flex justify-center items-center flex-col">
            <div div className="w-full h-96" >
                <img src={moon} className="object-cover h-full w-full object-center" />
            </div >
            <div className="grid lg:grid-cols-2 items-start lg:space-x-5 p-10 w-full">
                <div className="my-10 lg:my-0">
                    <Heading1 className="text-[#4D4D4D]">Don't squeeze in a sedan when you could relax in a van.</Heading1>
                    <div className="mt-10 text-start">
                        <Heading4>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                            (Hitch costs extra 😉)
                        </Heading4>
                        <Heading4 className="mt-3">
                            Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
                        </Heading4>
                    </div>
                </div>
                <div className="bg-[#FFCC8D] rounded-md p-10 ">
                    <div className="flex flex-col gap-14 text-start items-start">
                        <div className="">
                            <Heading2>Your destination is waiting.</Heading2>
                            <Heading2 className="mt-3">Your van is ready.</Heading2>
                        </div>
                        <Button className="bg-black text-white">Explore our vans</Button>
                    </div>

                </div>
            </div>

        </main >

    </div >;
};

export default About;
