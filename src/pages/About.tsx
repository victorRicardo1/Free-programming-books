import { BookOpen, Target, Heart, Users, Github, Star, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const About = () => {
  const mission = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To democratize access to quality programming education materials by curating and sharing free resources for learners worldwide."
    },
    {
      icon: Heart,
      title: "Our Vision",
      description: "A world where anyone, regardless of background or financial means, can access the best programming education resources."
    },
    {
      icon: Users,
      title: "Community First",
      description: "Built by developers, for developers. Every contribution helps someone learn and grow in their programming journey."
    }
  ];

  const stats = [
    { icon: BookOpen, value: "50+", label: "Free Books" },
    { icon: Users, value: "100+", label: "Contributors" },
    { icon: Star, value: "51", label: "GitHub Stars" },
    { icon: TrendingUp, value: "4", label: "Years Running" },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <BookOpen className="h-16 w-16 mx-auto mb-4 text-primary" />
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            About Free Programming Books
          </h1>
          <p className="text-xl text-muted-foreground">
            Empowering developers through free, accessible education
          </p>
        </div>

        {/* Mission Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {mission.map((item, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <item.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </Card>
          ))}
        </div>

        {/* About Content */}
        <Card className="p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Our Story</h2>
          
          <div className="space-y-4 text-muted-foreground">
            <p>
              Free Programming Books started in 2021 as a simple GitHub repository with a handful of programming books. What began as a small collection has grown into a comprehensive library serving thousands of developers worldwide.
            </p>
            
            <p>
              We believe that education should be accessible to everyone. In the world of programming, where new technologies emerge constantly, having access to quality learning materials shouldn't depend on your ability to pay.
            </p>
            
            <p>
              Our curated collection spans across multiple programming languages, frameworks, and domains - from Python and Java to Machine Learning and Cloud Computing. Each book is carefully selected to ensure it provides real value to learners at different stages of their journey.
            </p>
            
            <p>
              This project is maintained by a passionate community of developers who contribute their time and effort to help others learn. Every book added, every bug fixed, and every improvement made is a contribution to making programming education more accessible.
            </p>
          </div>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center">
              <stat.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Contributing Section */}
        <Card className="p-8 mb-12 bg-gradient-to-r from-primary/10 to-accent/10 border-2">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Want to Contribute?</h2>
            <p className="text-muted-foreground mb-6">
              We welcome contributions from developers of all skill levels. Whether you want to add a new book, fix a bug, or improve documentation, your help makes a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" asChild>
                <a
                  href="https://github.com/avinash201199/Free-programming-books"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4 mr-2" />
                  Visit Repository
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href="https://github.com/avinash201199/Free-programming-books#-contributing-guidelines"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read Contributing Guide
                </a>
              </Button>
            </div>
          </div>
        </Card>

        {/* Values */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-center mb-8">Our Values</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Quality Over Quantity
              </h3>
              <p className="text-sm text-muted-foreground">
                We carefully curate each resource to ensure it provides genuine educational value rather than just growing numbers.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Community-Driven
              </h3>
              <p className="text-sm text-muted-foreground">
                Every decision is made with our community in mind. This is a project by developers, for developers.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary" />
                Open and Free
              </h3>
              <p className="text-sm text-muted-foreground">
                All resources are completely free and legally accessible. No paywalls, no signup required, no restrictions.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Continuous Improvement
              </h3>
              <p className="text-sm text-muted-foreground">
                We're constantly updating our collection and improving the experience based on community feedback.
              </p>
            </Card>
          </div>
        </div>

        {/* License */}
        <Card className="p-6 mt-12 text-center bg-muted/30">
          <p className="text-sm text-muted-foreground">
            This project is licensed under the MIT License. All books are free and legally distributed.
            <br />
            <a
              href="https://github.com/avinash201199/Free-programming-books/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              View License
            </a>
          </p>
        </Card>
      </div>
    </div>
  );
};

export default About;
