import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  price: string;
}

const ProductCard = ({ title, description, image, price }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,245,255,0.3)]">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden aspect-square">
          <img 
            src={image} 
            alt={title}
            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="text-xl mb-2">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
        <p className="text-2xl font-bold text-primary mt-4">{price}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-[0_0_20px_rgba(0,245,255,0.3)] hover:shadow-[0_0_30px_rgba(0,245,255,0.5)] transition-all">
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
