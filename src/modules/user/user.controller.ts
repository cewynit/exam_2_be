import { Body, Controller, Delete, Get, HttpException, Param, Patch, Post, Put, Query, UploadedFile, UseInterceptors } from "@nestjs/common";
import { BaseController } from "../../common/base/base.controller";
import { UserService } from "./user.service";
import { GetUserListQuery, UpdateUserDto, createUserDto } from "./dto/user.interface";
import { TrimBodyPipe } from "../../common/helper/pipe/trim.body.pipe";
import { ErrorResponse, SuccessResponse } from "../../common/helper/response";
import mongoose from "mongoose";
import { toObjectId } from "../../common/helper/commonFunction";
import { FileInterceptor } from "@nestjs/platform-express";
import { ApiBody, ApiOperation } from "@nestjs/swagger";
import { HttpStatus } from "../../common/constants";


@Controller('user')
export class UserController extends BaseController{
    constructor(
        private readonly UserService: UserService
    ) {
        super();
    }
    @Get()
    async getAllUser(@Query()query :GetUserListQuery)
    {
        return await this.UserService._findAllAndCountUserByQuery(query);
    }

    @ApiOperation({ summary: 'Create User' })
    @ApiBody({ type: createUserDto })
    @Post()
    @UseInterceptors(FileInterceptor('file'))
    async createUser(@Body(new TrimBodyPipe()) dto: createUserDto,@UploadedFile() file: Express.Multer.File)
    {
        try{
            file !=null ? dto.image=await this.UserService.uploadImageToCloudinary(file) : dto.image='';
            const result=await this.UserService._createUser(dto)
            return new SuccessResponse(result)
        }catch (error) {
            this.handleError(error);
        }
    }
    @Put(':id')
    @UseInterceptors(FileInterceptor('file'))
    async updateUser(@Param('id')id:string,
    @Body(new TrimBodyPipe())
    dto:UpdateUserDto, @UploadedFile() file: Express.Multer.File)
    {
        try
        {
            const user = await this.UserService._findUserById(toObjectId(id));
            if (!user) {
                return new ErrorResponse(
                    HttpStatus.ITEM_NOT_FOUND,
                     "User not found"
                );
            }
            if(file !=null){
                if(user.image!==''){
                    this.UserService.deleteImageByUrl(user.image);
                }
            }
            file !=null ? dto.image=await this.UserService.uploadImageToCloudinary(file) : dto.image=user.image;
            const result=await this.UserService._updateUser(toObjectId(id),dto);
            if(result)
                return new SuccessResponse(result)
            throw new HttpException("Update error",HttpStatus.INTERNAL_SERVER_ERROR);
        }
        catch(error)
        {
            this.handleError(error);
        }
    }
    @Get(':id')
    async getUserById(@Param('id')id:string,)
    {
        try{
            
            const result = await this.UserService._findUserById(toObjectId(id));
            if (!result) {
                return new ErrorResponse(
                    HttpStatus.ITEM_NOT_FOUND,
                     "User not found"
                );
            }
            return new SuccessResponse(result);
        }catch(error)
        {
            this.handleError(error);
        }
    }
    @Delete(':id')
    async deleteUser(@Param('id')id:string,)
    {
      try{
        const user = await this.UserService._findUserById(toObjectId(id));
        if (!user) {
            return new ErrorResponse(
                HttpStatus.NOT_FOUND,
                 "User not found"
            );
        }
        console.log(user.image);
        if(user.image !==''){
            this.UserService.deleteImageByUrl(user.image);
        }
        const result=await this.UserService._deleteUser(toObjectId(id))
        return new SuccessResponse(result);
      }catch(error){
        this.handleError(error);

      }
    }
  }