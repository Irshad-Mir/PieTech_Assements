export class CreateCommentDto {
    postId:number;
    name:string;
    email:string;
    body:string;
    constructor(postId: number, name: string, email:string, body: string){
        this.postId=postId;
        this.name=name;
        this.email=email;
        this.body=body;
    }
    
    }