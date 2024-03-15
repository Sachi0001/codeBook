import { Faq } from "./components/Faq"
import { FeaturedProducts } from "./components/FeaturedProducts"
import { Hero } from "./components/Hero"
import { Testimonials } from "./components/Testimonials"
import { useTitle } from "../../hooks/useTitle"


export const Home = () => {

  useTitle("Home")
  return (
    <main>


      <Hero />

      <FeaturedProducts />

      <Testimonials />

      <Faq />
    </main>
  )
}
