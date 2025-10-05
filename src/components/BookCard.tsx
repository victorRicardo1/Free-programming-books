import { Book } from "@/data/books";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, BookOpen, Star, ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-500/10 text-green-600 border-green-500/20";
      case "Intermediate":
        return "bg-blue-500/10 text-blue-600 border-blue-500/20";
      case "Advanced":
        return "bg-purple-500/10 text-purple-600 border-purple-500/20";
      default:
        return "bg-gray-500/10 text-gray-600 border-gray-500/20";
    }
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border-2 hover:border-primary/50 h-full flex flex-col">
      <div className="p-6 flex-1 flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="h-5 w-5 text-primary" />
              {book.featured && (
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
              )}
            </div>
            <h3 className="text-lg font-bold group-hover:text-primary transition-colors line-clamp-2">
              {book.title}
            </h3>
          </div>
        </div>

        {/* Author & Meta */}
        <div className="space-y-2 mb-4">
          <p className="text-sm text-muted-foreground">by {book.author}</p>
          <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
            {book.year && <span>© {book.year}</span>}
            {book.pages && <span>• {book.pages} pages</span>}
            <span>• {book.language}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-1">
          {book.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge className={getLevelColor(book.level)} variant="outline">
            {book.level}
          </Badge>
          {book.tags.slice(0, 2).map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-2 mt-auto">
          <Button
            variant="default"
            size="sm"
            className="flex-1"
            asChild
          >
            <a
              href={book.downloadLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="h-4 w-4 mr-2" />
              Download
            </a>
          </Button>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-2xl">{book.title}</DialogTitle>
                <DialogDescription>
                  by {book.author}
                  {book.year && ` • ${book.year}`}
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Description</h4>
                  <p className="text-sm text-muted-foreground">
                    {book.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold">Category:</span>
                    <p className="text-muted-foreground">{book.category}</p>
                  </div>
                  <div>
                    <span className="font-semibold">Language:</span>
                    <p className="text-muted-foreground">{book.language}</p>
                  </div>
                  <div>
                    <span className="font-semibold">Level:</span>
                    <p className="text-muted-foreground">{book.level}</p>
                  </div>
                  {book.pages && (
                    <div>
                      <span className="font-semibold">Pages:</span>
                      <p className="text-muted-foreground">{book.pages}</p>
                    </div>
                  )}
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Topics Covered</h4>
                  <div className="flex flex-wrap gap-2">
                    {book.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button className="w-full" asChild>
                  <a
                    href={book.downloadLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download from GitHub
                  </a>
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </Card>
  );
};

export default BookCard;
