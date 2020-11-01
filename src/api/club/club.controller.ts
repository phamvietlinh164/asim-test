import { Controller, Get, Param, Req, Post, Body, Put, Delete } from '@nestjs/common';
import { Request } from 'express';
import { ClubService } from './club.service';
import match from './match'


if (match.matches[0].score) {
  console.log(match.matches[0].score)
}
const club = [];
const score = [];

match.matches.forEach((item, index) => {
  if (club.indexOf(item.team1) === -1) {
    club.push(item.team1)
    score.push(0)
  }

  if (club.indexOf(item.team2) === -1) {
    club.push(item.team2)
    score.push(0)
  }
})

match.matches.forEach((item, index) => {
  if (item.score) {

    if (item.score.ft[0] > item.score.ft[1]) {
      // console.log(score.indexOf(item.team1))
      score[club.indexOf(item.team1)] = score[club.indexOf(item.team1)] + 3
    } else if (item.score.ft[0] < item.score.ft[1]) {

      score[club.indexOf(item.team2)] = score[club.indexOf(item.team2)] + 3
    } else {
      score[club.indexOf(item.team1)] = score[club.indexOf(item.team1)] + 1;
      score[club.indexOf(item.team2)] = score[club.indexOf(item.team2)] + 1
    }
  }
})

// console.log(club)

// console.log(test)



@Controller('club')
export class ClubController {

  constructor(private readonly clubService: ClubService) { };

  @Get()
  async club(@Req() request: Request) {
    // console.log(this.domainListService.findAll())
    // try {
    //   const test = club.map((item, index) => {
    //     return { name: item, score: score[index] }
    //   });
    //   await test.forEach((item) => {
    //     this.clubService.create({ name: item.name, score: item.score })
    //   })
    // } catch (err) {
    //   console.log('some error')
    // }
    if (!request.query.score) {
      const result = await this.clubService.findAll();
      return result
    } else {
      const result = Number.isInteger(+request.query.score) ?
        await this.clubService.findByScore(+request.query.score) :
        "score have to be a interger";
      return result
    }
  }


  @Get(':clubId')
  async clubByClubId(@Param('clubId') clubId: string) {
    return await this.clubService.findById(clubId)
  }

  @Post()
  async create(
    @Body('clubId') clubId: string,
    @Body('name') name: string,
    @Body('score') score: number) {

    return await this.clubService.create({ clubId, name, score })

  }

  @Post('pagination')
  async pagination(
    @Body('numberInOnePage') numberInOnePage: number,
    @Body('page') page: number,
  ) {

    return await this.clubService.pagination(numberInOnePage, page)

  }

  @Post('search')
  async search(
    @Body('key') key: string,

  ) {

    return await this.clubService.search(key)

  }

  @Post('filterByScore')
  async filterByScore(
    @Body('min') min: number,
    @Body('max') max: number,

  ) {

    return await this.clubService.filterByScore(min, max)

  }

  @Put()
  async edit(
    @Body('_id') _id: string,
    @Body('name') name: string,
    @Body('score') score: number) {
    return await this.clubService.update({ _id, name, score })
  }

  @Delete(':_id')
  async delete(
    @Param('_id') _id: string) {
    return await this.clubService.delete(_id);
  }
}