import ContactForm from "./ContactForm";

export default function Contact() {
    return(
        <>
            <section id='Contact' className="py-20 px-5 bg-green-500 flex flex-col md:flex-row justify-between text-white">
                <div>
                    <h1 className="text-2xl font-bold">Contact Us</h1>
                    <p>If you have any questions or need assistance, feel free to reach out to us!</p>
                </div>
                <div>
                    <ContactForm/>
                </div>
            </section>
        </>
    )
}