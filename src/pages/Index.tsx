import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import gamingPc from "@/assets/gaming-pc.jpg";
import headphones from "@/assets/headphones.jpg";
import rgbLights from "@/assets/rgb-lights.jpg";
import gamingLaptop from "@/assets/gaming-laptop.jpg";
import soundBox from "@/assets/sound-box.jpg";

const products = [
  {
    id: 1,
    title: "Gaming PC",
    description: "High-performance RGB gaming rig with custom liquid cooling",
    image: gamingPc,
    price: "$1,499"
  },
  {
    id: 2,
    title: "Gaming Laptop",
    description: "Portable powerhouse with RGB keyboard and high refresh rate display",
    image: gamingLaptop,
    price: "$1,299"
  },
  {
    id: 3,
    title: "Gaming Headphones",
    description: "Premium RGB headphones with surround sound and noise cancellation",
    image: headphones,
    price: "$199"
  },
  {
    id: 4,
    title: "RGB Lighting",
    description: "Customizable LED strips to enhance your gaming setup",
    image: rgbLights,
    price: "$79"
  },
  {
    id: 5,
    title: "Mini Sound Box",
    description: "Portable Bluetooth speaker with RGB lighting and deep bass",
    image: soundBox,
    price: "$89"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Featured Products
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover our premium collection of gaming devices
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              description={product.description}
              image={product.image}
              price={product.price}
            />
          ))}
        </div>
      </section>

      <footer className="border-t border-border mt-20">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Galaxy Gamers Hub. Power Up Your Game.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
