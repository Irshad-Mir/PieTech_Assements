import { Injectable } from '@nestjs/common';
import { Schema } from 'mongoose';
import { Comment} from 'src/entites/comment.entity';
import { CommentRepository } from '../../repositories/comment.repository';
import { PostService } from '../post/post.service';
import { CreateCommentDto } from './dto/createComment.dto';


@Injectable()
export class CommentService {
      
        
        getPostById(postId: Schema.Types.ObjectId): any {
            throw new Error('Method not implemented.');
        }
        commentModel: any;
      
        constructor(private commentRepository: CommentRepository, private readonly postService: PostService,) {}
    
        async createComment(createCommentDto: CreateCommentDto, ) {
            const { postId, name,email, body} = createCommentDto;
            console.log(createCommentDto)
            //console.log(createPostDto)
    
            const getPost: any = await this.postService.getPostById(postId);
            console.log(postId)
    
           
    
            
            const createdcomment = await this.commentRepository.createComment(createCommentDto,);
            
    
           
           console.log(createdcomment)
            
    
            return createdcomment;
        }
   

        async findAll():Promise<Comment[]> {
            return await this.commentModel.find().exec();
          }
    }