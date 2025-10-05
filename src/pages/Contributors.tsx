import { useState } from "react";
import { Users, Github, Star, GitPullRequest, Code } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface Contributor {
  name: string;
  username: string;
  avatar: string;
  contributions: number;
  role: string;
}

const Contributors = () => {
  const [contributors] = useState<Contributor[]>([
    {
      name: "Avinash Kumar",
      username: "avinash201199",
      avatar: "https://github.com/avinash201199.png",
      contributions: 106,
      role: "Creator & Maintainer"
    },
    // Additional contributors would be fetched from GitHub API in a real implementation
  ]);

  const stats = [
    { icon: Users, value: "100+", label: "Contributors" },
    { icon: GitPullRequest, value: "150+", label: "Pull Requests" },
    { icon: Code, value: "106", label: "Commits" },
    { icon: Star, value: "51", label: "Stars" },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Users className="h-16 w-16 mx-auto mb-4 text-primary" />
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Our Contributors
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet the amazing people who make this project possible through their contributions
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-all">
              <stat.icon className="h-10 w-10 mx-auto mb-3 text-primary" />
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Main Contributor */}
        <Card className="p-8 mb-12 bg-gradient-to-r from-primary/10 to-accent/10 border-2">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Avatar className="h-32 w-32 border-4 border-primary">
              <AvatarImage src={contributors[0].avatar} alt={contributors[0].name} />
              <AvatarFallback>{contributors[0].name[0]}</AvatarFallback>
            </Avatar>
            
            <div className="flex-1 text-center md:text-left">
              <Badge className="mb-2">{contributors[0].role}</Badge>
              <h2 className="text-2xl font-bold mb-2">{contributors[0].name}</h2>
              <p className="text-muted-foreground mb-4">@{contributors[0].username}</p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{contributors[0].contributions}</div>
                  <div className="text-sm text-muted-foreground">Contributions</div>
                </div>
              </div>
              <Button variant="default" asChild>
                <a
                  href={`https://github.com/${contributors[0].username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4 mr-2" />
                  View GitHub Profile
                </a>
              </Button>
            </div>
          </div>
        </Card>

        {/* All Contributors Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">All Contributors</h2>
          <Card className="p-8 text-center">
            <Github className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground mb-4">
              We appreciate all contributors who have helped improve this project
            </p>
            <Button variant="outline" asChild>
              <a
                href="https://github.com/avinash201199/Free-programming-books/graphs/contributors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Users className="h-4 w-4 mr-2" />
                View All Contributors on GitHub
              </a>
            </Button>
          </Card>
        </div>

        {/* Become a Contributor */}
        <Card className="p-8 bg-gradient-to-r from-primary to-accent text-primary-foreground">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Become a Contributor</h2>
            <p className="text-xl mb-6 opacity-90">
              Join our community and help make programming education accessible to everyone
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-background hover:bg-background/90 text-foreground"
                asChild
              >
                <a
                  href="https://github.com/avinash201199/Free-programming-books"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5 mr-2" />
                  View Repository
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
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

        {/* How to Contribute */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-center">How to Contribute</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="font-bold text-lg mb-2">Add Books</h3>
              <p className="text-sm text-muted-foreground">
                Share free programming books by adding them to the appropriate category folder
              </p>
            </Card>

            <Card className="p-6">
              <div className="text-4xl mb-4">🐛</div>
              <h3 className="font-bold text-lg mb-2">Fix Issues</h3>
              <p className="text-sm text-muted-foreground">
                Help improve the project by fixing bugs and addressing open issues
              </p>
            </Card>

            <Card className="p-6">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="font-bold text-lg mb-2">Improve Documentation</h3>
              <p className="text-sm text-muted-foreground">
                Enhance README files, add descriptions, and improve overall documentation
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contributors;
