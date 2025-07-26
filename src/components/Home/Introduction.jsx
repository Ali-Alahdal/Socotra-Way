
import IntroImage from "../../assets/images/home/bg/introduction.jpg";

function Introduction() {
    return ( 
       
           <section
            className="relative hero  min-h-screen  w-full "
            style={{
                backgroundImage: `url(${IntroImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            >
               

                 <div className="hero-overlay"></div>
                        
            <div className="hero-content text-neutral-content text-center animate-fade-up">
                <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">The Jewel of the Arabian Sea</h1>
                <p className="mb-5">
A place of rare beauty, Socotra is home to unique landscapes, exotic plants, and pristine beaches. Discover its natural wonders, rich culture, and unforgettable adventures.                </p>
                <button className="btn bg-[#ffbb00]">Discover Socotra</button>
                </div>
            </div>

            
            </section>
            
     );
  
}

export default Introduction;
