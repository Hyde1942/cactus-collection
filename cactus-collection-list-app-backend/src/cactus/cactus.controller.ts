import { Controller, Get, Res, HttpStatus, Post, Body, Put, Query, NotFoundException, Delete, Param } from '@nestjs/common';
import { cactusService } from './cactus.service';
import { createCactusDTO } from './dto/create-cactus.dto';

@Controller('cactus')
export class cactusController {
    constructor(private cactusService: cactusService) { }

    // Retrieve cactuss list
    @Get('cactus')
    async getAllCactus(@Res() res) {
        const cactus = await this.cactusService.getAllCactus();
        return res.status(HttpStatus.OK).json(cactus);
    }

    // Fetch a particular cactus using ID
    @Get('cactus/:cactusID')
    async getCactus(@Res() res, @Param('cactusID') cactusID) {
        const cactus = await this.cactusService.getCactus(cactusID);
        if (!cactus) throw new NotFoundException('Cactus does not exist in our records.');
        return res.status(HttpStatus.OK).json(cactus);

    }

    // add a cactus
    @Post('/create')
    async addCactus(@Res() res, @Body() createCactusDTO: createCactusDTO) {
        const cactus = await this.cactusService.addCactus(createCactusDTO);
        return res.status(HttpStatus.OK).json({
            message: "Cactus has been added to the collection",
            cactus
        })
    }

    // Update a cactus's details
    @Put('/update')
    async updateCactus(@Res() res, @Query('cactusID') cactusID, @Body() createCactusDTO: createCactusDTO) {
        const cactus = await this.cactusService.updateCactus(cactusID, createCactusDTO);
        if (!cactus) throw new NotFoundException('cactus does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Cactus has been successfully updated',
            cactus
        });
    }

    // Delete a cactus
    @Delete('/delete')
    async deleteCactus(@Res() res, @Query('cactusID') cactusID) {
        const cactus = await this.cactusService.deleteCactus(cactusID);
        if (!cactus) throw new NotFoundException('Cactuss does not exist in our records');
        return res.status(HttpStatus.OK).json({
            message: 'Cactus was removed',
            cactus
        })
    }
}