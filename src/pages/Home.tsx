import { Link } from "react-router-dom";
import { BookOpen, Github, Star, TrendingUp, Users, Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-books.jpg";
import { books } from "@/data/books";
import BookCard from "@/components/BookCard";

const Home = () => {
  const featuredBooks = books.filter(book => book.featured);
  const stats = [
    { icon: BookOpen, value: "50+", label: "Free Books" },
    { icon: Users, value: "14+", label: "Categories" },
    { icon: Download, value: "100%", label: "Free Access" },
    { icon: Star, value: "51", label: "GitHub Stars" },
  ];

  const categories = [
    { name: "Python", icon: "🐍", color: "from-blue-500 to-cyan-500", count: 5 },
    { name: "Java", icon: "☕", color: "from-orange-500 to-red-500", count: 4 },
    { name: "Web Dev", icon: "🌐", color: "from-purple-500 to-pink-500", count: 5 },
    { name: "ML/AI", icon: "🤖", color: "from-indigo-500 to-purple-500", count: 5 },
    { name: "DSA", icon: "🔍", color: "from-green-500 to-emerald-500", count: 3 },
    { name: "Cloud", icon: "☁️", color: "from-sky-500 to-blue-400", count: 2 },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent opacity-95"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
          }}
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-background/10 backdrop-blur-sm px-4 py-2 rounded-full border border-primary-foreground/20">
              <Star className="h-4 w-4 text-accent fill-accent" />
              <span className="text-sm font-medium text-primary-foreground">Open Source • Community Driven • 100% Free</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight">
              Free Programming<br />Books Library
            </h1>
            
            <p className="text-xl sm:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
              Your comprehensive collection of free programming and technical e-books.<br className="hidden sm:block" />
              Learn, grow, and build amazing things.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button 
                size="lg" 
                variant="default"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 h-14 shadow-lg"
                asChild
              >
                <Link to="/books">
                  <BookOpen className="mr-2 h-6 w-6" />
                  Browse Library
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary font-semibold text-lg px-8 h-14 shadow-lg"
                asChild
              >
                <a href="https://github.com/avinash201199/Free-programming-books" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-6 w-6" />
                  View on GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="hsl(var(--background))"/>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <stat.icon className="h-10 w-10 mx-auto mb-3 text-primary" />
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>
      </section>

      {/* Quick Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Popular Categories
          </h2>
          <p className="text-lg text-muted-foreground">
            Jump straight to your favorite programming domain
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <Link key={index} to="/books">
              <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
                <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground">{category.count} books</p>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Books */}
      <section className="bg-muted/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Featured Books
              </h2>
              <p className="text-lg text-muted-foreground">
                Handpicked essential resources for developers
              </p>
            </div>
            <Button variant="outline" asChild className="hidden sm:flex">
              <Link to="/books">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredBooks.slice(0, 6).map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>

          <div className="text-center mt-8 sm:hidden">
            <Button variant="outline" asChild>
              <Link to="/books">
                View All Books
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why Choose Us?
            </h2>
            <p className="text-lg text-muted-foreground">
              The best collection of free programming resources
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Curated Content",
                description: "Carefully selected high-quality programming books across all major technologies"
              },
              {
                icon: Users,
                title: "Community-Driven",
                description: "Built and maintained by developers from around the world"
              },
              {
                icon: TrendingUp,
                title: "Always Updated",
                description: "Regular additions of new books and resources to keep you current"
              },
              {
                icon: Download,
                title: "Easy Access",
                description: "Direct download links to all books - no signup required"
              }
            ].map((feature, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-accent py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            Start Your Learning Journey Today
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Join thousands of developers accessing free programming books
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              variant="secondary"
              className="bg-background hover:bg-background/90 text-foreground font-semibold"
              asChild
            >
              <Link to="/books">
                <BookOpen className="mr-2 h-5 w-5" />
                Explore Books
              </Link>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold"
              asChild
            >
              <a href="https://github.com/avinash201199/Free-programming-books" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                Contribute on GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
