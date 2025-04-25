
export const getOptimizedImageUrl = (
  imageName: string, 
  width: number = 800,
  format: 'webp' | 'avif' | 'jpg' = 'webp'
): string => {
  // In a real implementation, this would connect to an image optimization service
  // For now, we'll use placeholder images with proper naming to simulate the behavior
  
  const imageMap: Record<string, string> = {
    'bangkok': 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=800&auto=format&fit=crop',
    'chiang-mai': 'https://images.unsplash.com/photo-1600850056064-a8b380df8395?q=80&w=800&auto=format&fit=crop',
    'islands': 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=800&auto=format&fit=crop',
    'founder': '/src/assets/images/salim_pic.jpg',  // Updated to use local image
  };
  
  return imageMap[imageName] || `https://placehold.co/${width}x${Math.floor(width * 0.75)}/CCCCCC/969696?text=Image+Not+Found`;
};

export const generateSrcSet = (imageName: string, format: 'webp' | 'avif' | 'jpg' = 'webp'): string => {
  // Generate responsive image sizes
  const sizes = [320, 640, 960, 1280, 1920];
  return sizes.map(size => `${getOptimizedImageUrl(imageName, size, format)} ${size}w`).join(', ');
};
