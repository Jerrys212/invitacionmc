import DressCode from "@/src/components/DressCode";
import Footer from "@/src/components/Footer";
import Gallery from "@/src/components/Galery";
import Gift from "@/src/components/Gift";
import Hero from "@/src/components/Hero";
import Location from "@/src/components/Location";
import Lodgement from "@/src/components/Lodgement";
import Parents from "@/src/components/Parents";
import Rsvp from "@/src/components/Rsvp";
import Timeline from "@/src/components/Timeline";
import Us from "@/src/components/Us";
import Visit from "@/src/components/Visit";

interface Props {
    params: Promise<{ pases: string }>;
}

export default async function Home({ params }: Props) {
    const { pases: pasesParam } = await params;
    const pases = parseInt(pasesParam) || 0;

    return (
        <>
            <Hero />

            <Parents />

            <Location />

            <Us />

            <Timeline />

            <DressCode />

            <Visit />

            <Lodgement />

            <Gift />

            <Rsvp pases={pases} />

            <Gallery />

            <Footer />
        </>
    );
}
