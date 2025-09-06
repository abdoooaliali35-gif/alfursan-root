import { useState, useCallback } from 'react';
import { removeBackground, loadImage } from '@/utils/backgroundRemoval';
import { Button } from '@/components/ui/button';
import { Loader2, Download } from 'lucide-react';

interface ImageProcessorProps {
  onImageProcessed: (imageUrl: string) => void;
  imageUrl: string;
}

const ImageProcessor = ({ onImageProcessed, imageUrl }: ImageProcessorProps) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [processedImageUrl, setProcessedImageUrl] = useState<string | null>(null);

  const processImage = useCallback(async () => {
    if (!imageUrl) return;
    
    setIsProcessing(true);
    try {
      // Create image element from URL
      const img = new Image();
      img.crossOrigin = 'anonymous';
      
      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
        img.src = imageUrl;
      });

      // Remove background
      const processedBlob = await removeBackground(img);
      const processedUrl = URL.createObjectURL(processedBlob);
      
      setProcessedImageUrl(processedUrl);
      onImageProcessed(processedUrl);
    } catch (error) {
      console.error('Error processing image:', error);
    } finally {
      setIsProcessing(false);
    }
  }, [imageUrl, onImageProcessed]);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
        {/* Original Image */}
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2">الصورة الأصلية</h3>
          <img 
            src={imageUrl} 
            alt="Original"
            className="w-full max-w-sm mx-auto rounded-lg shadow-md"
          />
        </div>

        {/* Processed Image */}
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2">بعد إزالة الخلفية</h3>
          {processedImageUrl ? (
            <div className="relative">
              <img 
                src={processedImageUrl} 
                alt="Processed"
                className="w-full max-w-sm mx-auto rounded-lg shadow-md bg-white"
              />
            </div>
          ) : (
            <div className="w-full max-w-sm mx-auto h-64 bg-muted rounded-lg flex items-center justify-center">
              <span className="text-muted-foreground">معاينة النتيجة</span>
            </div>
          )}
        </div>
      </div>

      <Button 
        onClick={processImage} 
        disabled={isProcessing || !imageUrl}
        className="flex items-center gap-2"
      >
        {isProcessing ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            جاري المعالجة...
          </>
        ) : (
          <>
            <Download className="h-4 w-4" />
            إزالة الخلفية
          </>
        )}
      </Button>
    </div>
  );
};

export default ImageProcessor;