import { Controller, Get } from '@nestjs/common';

@Controller('api')
export class VideoController {
  private cnt = 0;
  @Get('srcVid')
  getVideoUrl(): { url: string } {
    this.cnt += 1;
    if (this.cnt % 2 === 0) {
      const videoUrl = 'http://localhost:4000/test1.mp4';
      return { url: videoUrl };
    } else {
      const videoUrl = 'http://localhost:4000/test2.mp4';
      return { url: videoUrl };
    }
  }
}
