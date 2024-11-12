import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-red-50">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-[80vh] bg-red-700 text-white">
        <Image
          src="/images/logo.png" // path in the public folder, e.g., public/images/logo.png
          alt="Maryland Dhoom Dance Team"
          width={600}
          height={400}
          className="rounded-lg shadow-lg"
        />
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold">Welcome to Maryland Dhoom</h1>
          <p className="text-lg">
            Celebrating culture, passion, and excellence in dance.
          </p>
          <Link href="/events">
            <button className="mt-6 px-6 py-3 bg-white text-red-700 font-semibold rounded hover:bg-gray-200">
              View Our Events
            </button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold text-red-700">About Us</h2>
        <p className="mt-4 text-gray-700">
          Maryland Dhoom is a university dance team that brings together the
          vibrant energy of South Asian dance and a deep love for performance.
          We take pride in representing our heritage, connecting with our
          community, and expressing ourselves through dance.
        </p>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 px-6 bg-white text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold text-red-700">Upcoming Events</h2>
        <p className="mt-4 text-gray-700">
          Join us at our upcoming performances and show your support!
        </p>
        <Link href="/events">
          <button className="mt-6 px-6 py-3 bg-red-700 text-white font-semibold rounded hover:bg-purple-600">
            Check Events
          </button>
        </Link>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 px-6 text-center bg-red-100">
        <h2 className="text-3xl font-semibold text-red-700">
          Join Maryland Dhoom
        </h2>
        <p className="mt-4 text-gray-700">
          Ready to be part of an amazing team? Come dance with us!
        </p>
        <Link href="/contact">
          <button className="mt-6 px-6 py-3 bg-red-700 text-white font-semibold rounded hover:bg-purple-600">
            Contact Us
          </button>
        </Link>
      </section>
    </main>
  );
}
