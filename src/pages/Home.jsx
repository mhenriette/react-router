import Button from "../components/ui/Button";
import NavBar from "../components/layouts/NavBar";
import { Heading1, Heading4 } from "../components/ui/Typography";
import Footer from "../components/layouts/Footer";

const Home = () => {
    return <div className="bg-hero-pattern bg-no-repeat w-full bg-cover text-white h-screen flex flex-col">
        <NavBar />
        <main className="flex-1 flex items-center justify-center p-4 bg-black bg-opacity-40">
            <div className="py-16 mx-auto text-center items-center flex flex-col">
                <Heading1>You got the travel plans, we got the travel vans.</Heading1>
                <Heading4 className="pt-6 max-w-4xl">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</Heading4>
                <Button className="bg-[#FF8C38] w-1/2 mt-14 py-4 ">Find your van</Button>

            </div>
        </main>
        <Footer />
    </div>;
};

export default Home;
