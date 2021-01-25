import { Controller, Get, Post, Body, Headers, HttpException, HttpStatus } from '@nestjs/common';
import { RankService } from './rank.service';
import { RankDto } from './dto/rank.dto';

@Controller('rank')
export class RankController {
  constructor(private rankService: RankService) {}

  @Get('load')
  load(@Headers('secretcode') secretCode: string) {
    if(secretCode) {
      return this.rankService.load(secretCode);
    } else {
      throw new HttpException(
        'Insufficient parameters',
        HttpStatus.BAD_REQUEST);
    }
  }

  @Post('reg')
  create(@Body() rank: RankDto) {
    if(rank.nickname && rank.score && rank.stage && rank.subcha) {
      return this.rankService.create(rank);
    } else {
      throw new HttpException(
        'Insufficient parameters',
        HttpStatus.BAD_REQUEST);
    }
    
  }

}