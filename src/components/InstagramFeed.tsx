
import React, { useState, useEffect } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { cn } from '@/lib/utils';
import { ArrowLeft, ArrowRight } from "lucide-react";

type InstagramPost = {
  id: string;
  mediaUrl: string;
  caption?: string;
  permalink: string;
}

const InstagramFeed: React.FC = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        setIsLoading(true);
        // In a real implementation, you would fetch from Instagram API
        // For now, we'll use placeholder data
        
        // Mock data to simulate Instagram posts
        const mockPosts: InstagramPost[] = [
          {
            id: '1',
            mediaUrl: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
            caption: 'DJ set at Club XYZ',
            permalink: 'https://instagram.com'
          },
          {
            id: '2',
            mediaUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
            caption: 'New mix dropping soon',
            permalink: 'https://instagram.com'
          },
          {
            id: '3',
            mediaUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
            caption: 'Behind the scenes',
            permalink: 'https://instagram.com'
          },
          {
            id: '4',
            mediaUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
            caption: 'Tonight's vibes',
            permalink: 'https://instagram.com'
          },
          {
            id: '5',
            mediaUrl: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
            caption: 'Summer festival highlights',
            permalink: 'https://instagram.com'
          }
        ];
        
        setPosts(mockPosts);
        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching Instagram posts:', err);
        setError('Failed to load Instagram posts');
        setIsLoading(false);
      }
    };

    fetchInstagramPosts();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-40">
        <div className="animate-pulse flex space-x-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-gray-700 h-20 w-20 rounded"></div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="instagram-feed mt-8 mb-4 px-4">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {posts.map((post) => (
            <CarouselItem key={post.id} className="basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <a 
                href={post.permalink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover-scale"
              >
                <div className="overflow-hidden rounded-md">
                  <img
                    src={post.mediaUrl}
                    alt={post.caption || "Instagram post"}
                    className="w-full h-64 object-cover hover:scale-105 transition-all duration-300"
                  />
                  <div className="p-3 bg-black bg-opacity-70 text-sm">
                    <p className="line-clamp-2">{post.caption || "DJ Rapha"}</p>
                  </div>
                </div>
              </a>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 md:left-4 bg-black bg-opacity-50 hover:bg-opacity-70" />
        <CarouselNext className="right-2 md:right-4 bg-black bg-opacity-50 hover:bg-opacity-70" />
      </Carousel>
      
      <div className="text-center mt-4">
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="presskit-button inline-flex items-center"
        >
          FOLLOW ON INSTAGRAM
        </a>
      </div>
    </div>
  );
};

export default InstagramFeed;
