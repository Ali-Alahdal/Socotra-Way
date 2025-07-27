import About from "../components/Home/About";
import Activities from "../components/Home/Activities";
import BestTime from "../components/Home/BestTime";
import Introduction from "../components/Home/Introduction";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

import Waves from "../components/Parts/Waves";

import Sand from "../assets/images/home/bg/sand.jpg";
import HowToTravel from "../components/Home/HowToTravel";
import EscapeDeals from "../components/Parts/StackedCardsScroll";
import Card from "../components/Home/Services";
import ContactUs from "../components/Home/ContactUs";
import AnimatedBackground from "../components/Parts/AnimatedBackground";
function Home() {
      const cards = [
    { title: 'Card 1', content: 'This is the first card content.' },
    { title: 'Card 2', content: 'Second card with more details.' },
    { title: 'Card 3', content: 'The third card in the stack.' },
    { title: 'Card 4', content: 'Final card in the sequence.' },
  ];
    return (
        <>
        <Header />
      
        <main >
           
        
                    <Introduction />
                    <Waves />
                  
                    <div className=" bg-center bg-cover bg-white   "
                        // style={{ 
                        //     backgroundImage: `url(${Sand})`,
                        // }}
                    >

                        
                        <About />
                          <Activities />
                        <EscapeDeals />
                         <HowToTravel />
                        <Card />
                        
                      
                     
                       
                    </div>
                    <ContactUs />
         
       
            
        </main>

        <Footer />


        </> 
     );
}

export default Home;